import React from 'react';
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div id="Login">
      <form action="/login" method="get">
        <label for="username">Username</label>&nbsp;&nbsp;
        <input id="username" type="text" placeholder="Enter Username" name="username" required />

        <label for="password">Password</label>&nbsp;&nbsp;
        <input id="password" type="password" placeholder="Enter Password" name="password" required />

        <Link to="/"><button className="Login_button" type="submit">Login</button></Link>

        <Link to="/signup"><button className="Signup_button" type="submit">Signup</button></Link>
      </form>
    </div>
  );
}

export default Login;
