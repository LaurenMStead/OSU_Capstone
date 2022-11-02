import React, {Component} from "react";
import {render} from "react-dom"
import HomePage from "./HomePage.jsx"

/*
This is all that is needed here.
All code has been relocated to "HomePage.jsx" and is unchanged
 */

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="center">
        <HomePage />
      </div>
    );
  }
}

// Required to render app page, all other pages can use standard export
const appDiv = document.getElementById("app");
render(<App />, appDiv);
