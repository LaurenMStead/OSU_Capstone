import React from 'react';
import {Link} from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <form action="/signup" method="post">
        <label for="username">Username</label>&nbsp;&nbsp;
        <input type="text" placeholder="Enter Username" name="username" required />
        <br></br>
        <br></br>
        <label for="password">Password</label>&nbsp;&nbsp;
        <input type="password" placeholder="Enter Password" name="password" required />
        <br></br>
        <br></br>
        <Link to="/"><button type="submit">Signup</button></Link>
      </form>
    </div>
  );
}

export default Signup;
