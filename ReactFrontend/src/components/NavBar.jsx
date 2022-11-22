import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const NavBar = ({ isLoggedIn, setIsLoggedIn, setIsAdmin }) =>  {

    const handleLogout = () => {
      setIsLoggedIn(false);
      setIsAdmin(false);
    }
    return (
      <div id="NavBar">
        <h1 className="NavBar_header"><a className="Header_Link" href="/">ADOPTR</a></h1>
        <div className="NavBar_linkContainer">
          <NavLink className="NavBar_link" to="/">Home</NavLink>
          <NavLink className="NavBar_link" to="/search">Search</NavLink>
          <NavLink className="NavBar_link" to="/browse">Browse</NavLink>
          {isLoggedIn ? <NavLink className="NavBar_link" to="/newPet">Add Pet</NavLink> : null }
          {isLoggedIn ? <Link className="NavBar_link" onClick={handleLogout}>Logout</Link> : <NavLink className="NavBar_link" to="/login">Login</NavLink>}
        </div>
      </div>
    );
}

export default NavBar;
