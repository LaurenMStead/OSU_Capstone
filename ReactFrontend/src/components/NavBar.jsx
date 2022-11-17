import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () =>  {
    return (
      <div id="NavBar">
        <h1 className="NavBar_header">ADOPTR</h1>
        <div className="NavBar_links">
          <NavLink className="NavBar_homeLink" to="/">Home</NavLink>
          <NavLink className="NavBar_searchLink" to="/search">Search</NavLink>
          <NavLink className="NavBar_browseLink" to="/browse">Browse</NavLink>
          <NavLink className="NavBar_loginLink" to="/login">Login</NavLink>
        </div>
      </div>
    );
}

export default NavBar;
