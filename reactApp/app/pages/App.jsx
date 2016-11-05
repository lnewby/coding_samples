import React from 'react';
import {Link} from 'react-router';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <p>Welcome to the App!</p>
        <header>
          <nav>
            <Link to='/about'>About</Link>&nbsp;
            <Link to='/contact'>Contact</Link>
          </nav>
        </header>
        {this.props.children}
      <footer>
        <p>My Footer</p>
      </footer>
      </div>
    );
  }
}
