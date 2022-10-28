import React from 'react';

const Login = () => {
  return (
    <div>
      <form action="/login" method="get">
        <label for="username">Username</label>
        <input type="text" placeholder="Enter Username" name="username" required />

        <label for="password">Password</label>
        <input type="password" placeholder="Enter Password" name="password" required />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
