import React, { Component } from "react";
import { useNavigate } from 'react-router-dom';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    const navigate = useNavigate();
  }

  render() {
    return (
      <div id="navBar">
        <button id="homeButton" onClick={() => navigate('/feed')}>Home</button>
        <button id="searchButton" onClick={() => navigate('/search')}>Search</button>
        <button id="browseButton" onClick={() => navigate('/browse')}>Browse</button>
        <button id="loginButton" onClick={() => navigate('/login')}>Login</button>
      </div>
    );
  }
}
