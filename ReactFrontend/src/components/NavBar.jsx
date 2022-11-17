import React from 'react';
import { NavLink} from 'react-router-dom';

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
