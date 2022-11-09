import React from 'react';

const Login = () => {
  return (
    <div>
      <form action="/login" method="get">
        <label for="username">Username</label>
        <input type="text" placeholder="Enter Username" name="username" required />
        <br></br>
        <br></br>
        <label for="password">Password</label>
        <input type="password" placeholder="Enter Password" name="password" required />
        <br></br>
        <br></br>
        <Link to="/"><button type="submit">Login</button></Link>
      </form>
    </div>
  );
}

export default Login;
