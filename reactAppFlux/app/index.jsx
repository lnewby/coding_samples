const React = require('react');
const ReactDOM = require('react-dom');
import constants from './constants/app-constants';
import { incrementActions } from './actions/app-actions';
import { TodoStore } from './stores/app-stores';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      counter: TodoStore.getCount()
    };

    this.increment = this.increment.bind(this);
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount () {
    TodoStore.addChangeListener(this._onChange);
  }

  componentWillUnmount () {
    TodoStore.removeChangeListener(this._onChange);
  }

  _onChange () {
    this.setState({
      counter: TodoStore.getCount()
    });
  }

  increment () {
    incrementActions.incrementCount();
    // this.setState({
    //   counter: this.state.counter + 1
    // });
  }

  render () {
    return (
      <div>
        <p>
          Counter: {this.state.counter}
        </p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

const target = document.getElementById('app');

ReactDOM.render(<App />, target);
