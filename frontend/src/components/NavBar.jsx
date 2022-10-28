import React from 'react';
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';

const NavBar = () =>  {
  // TO-DO: if user is logged in, show logout button. But if user is not logged in, show login button. This might be done in top-level (App.jsx)
  // const isLoggedIn = () => {
  //   if (false) {
  //     // show logout button
  //   } else {
  //     return <NavLink id="loginButton" to="/login">Login</NavLink>
  //   }
  // }
    return (
      <div id = "NavBar">
        <p>This is a navigation bar</p>
          <BrowserRouter>
          <nav>
              <ul>
                <NavLink id="homeButton" to="feed">Home</NavLink>
                <NavLink id="searchButton" to="search">Search</NavLink>
                <NavLink id="browseButton" to="browse">Browse</NavLink>
              </ul>
          </nav>
              </BrowserRouter>
      </div>
    );
}

export default NavBar;
