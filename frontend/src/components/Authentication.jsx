import React, { Component } from "react";
import { render } from "react-dom";
import LoginForm from './Authentication/LoginForm.jsx';
import SignupForm from './Authentication/SignupForm.jsx';

export default class Authentication extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>This is the Authentication</h1>
      </div>
    );
  }
}
