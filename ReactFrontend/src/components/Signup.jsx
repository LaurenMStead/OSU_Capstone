import React from 'react';
import {Link} from "react-router-dom";

const Signup = () => {
  return (
    <div id="Signup">
      <form action="/signup" method="post">
        <label for="username">Username</label>
        <input type="text" placeholder="Enter Username" name="username" required />

        <label for="password">Password</label>
        <input type="password" placeholder="Enter Password" name="password" required />

        <Link to="/"><button className="Signup_button" type="submit">Signup</button></Link>
      </form>
    </div>
  );
}

export default Signup;
