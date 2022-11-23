import React, {useContext} from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import AuthContext from "../context/AuthContext";

const NavBar = ({ navNewPet }) =>  {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
      auth.setIsLoggedIn(false);
      auth.setIsAdmin(false);
      console.log("logged out!")
    }

    return (
      <div id="NavBar">
        <h1 className="NavBar_header"><a className="Header_Link" href="/">ADOPTR</a></h1>
        <div className="NavBar_linkContainer">
          <NavLink className="NavBar_link" to="/">Home</NavLink>
          <NavLink className="NavBar_link" to="/search">Search</NavLink>
          <NavLink className="NavBar_link" to="/browse">Browse</NavLink>
          {auth.isLoggedIn && auth.isAdmin ? <NavLink className="NavBar_link" to='/newPet'>Add Pet</NavLink> : null }
          {auth.isLoggedIn ? <Link className="NavBar_link" onClick={handleLogout} to='/'>Logout</Link> : <NavLink className="NavBar_link" to="/login">Login/Sign Up</NavLink>}
        </div>
      </div>
    );
}

export default NavBar;
