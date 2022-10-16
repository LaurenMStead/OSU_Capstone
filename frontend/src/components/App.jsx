import React, { Component } from "react";
import { render } from "react-dom";
import NavBar from './NavBar.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>This is the App</h1>
      </div>
    );
  }
}
