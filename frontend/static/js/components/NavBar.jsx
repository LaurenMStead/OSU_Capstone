import React from 'react';

import { NavLink } from 'react-router-dom';

const NavBar = () =>  {
  // TO-DO: if user is logged in, show logout button. But if user is not logged in, show login button. This might be done in top-level (App.jsx)
  const isLoggedIn = () => {
    if (false) {
      // show logout button
    } else {
      return <NavLink id="loginButton" to="/login">Login</NavLink>
    }
  }

  return (
    <div id="navBar">
      <NavLink id="homeButton" to="/feed">Home</NavLink>
      <NavLink id="searchButton" to="/search">Search</NavLink>
      <NavLink id="browseButton" to="/browse">Browse</NavLink>
      {isLoggedIn()}
    </div>
  );
}

export default NavBar;
