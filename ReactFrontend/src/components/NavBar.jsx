import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () =>  {
    return (
      <div id="NavBar">
        <h1 className="NavBar_header">ADOPTR</h1>
        <div className="NavBar_buttons">
          <NavLink className="NavBar_homeButton" to="/">Home</NavLink>
          <NavLink className="NavBar_searchButton" to="/search">Search</NavLink>
          <NavLink className="NavBar_browseButton" to="/browse">Browse</NavLink>
          <NavLink className="NavBar_loginButton" to="/login">Login</NavLink>
        </div>
      </div>
    );
}

export default NavBar;
