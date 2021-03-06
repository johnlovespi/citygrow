import React, { Component } from 'react';
import style from './Welcome.css';
import { Link } from 'react-router';

class Welcome extends Component {

render() {
  return (
    <div className="intro-pages">
      <h1 className="intro-title">Welcome to CityGrow!</h1>
      <div className="link-container">
        <Link to="login">Login</Link>
        <Link to="signup">Sign Up</Link>
      </div>
    </div>
  );
}
}

export default Welcome;
