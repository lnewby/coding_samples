const React = require('react');
const ReactDOM = require('react-dom');
const { Router, Route, browserHistory: history, IndexRoute } = require('react-router');
import App from './pages/App.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={About} />
    <Route path='/about' component={About} />
    <Route path='/contact' component={Contact} />
  </Route>
);

const props = {
  routes,
  history
};

const target =  document.getElementById('app');

ReactDOM.render(<Router {...props} />, target);
