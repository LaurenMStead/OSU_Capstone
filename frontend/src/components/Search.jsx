import React, { Component } from "react";
import { render } from "react-dom";
import FilterBar from './FilterBar.jsx';
import ProfileList from './ProfileList.jsx';

export default class Search extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>This is the Search</h1>
      </div>
    );
  }
}
