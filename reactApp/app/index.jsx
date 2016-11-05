const React = require('react');
const ReactDOM = require('react-dom');
const { Router, Route, hashHistory } = require('react-router');
import App from './pages/App.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

const props = {
  history: hashHistory,
};

const target =  document.getElementById('app');

ReactDOM.render((
  <Router {...props}>
    <Route path='/' component={App} />
    <Route path='/about' component={About} />
    <Route path='/contact' component={Contact} />
  </Router>
), target);
