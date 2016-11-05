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
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    );
  }
}
