import React, { Component } from "react";
import { render } from "react-dom";

export default class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form action="/login" method="get">
          <label for="username">Username</label>
          <input type="text" placeholder="Enter Username" name="username" required />

          <label for="password">Password</label>
          <input type="password" placeholder="Enter Password" name="password" required />

          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}
