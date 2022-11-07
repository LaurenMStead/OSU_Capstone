import React from 'react';

const Signup = () => {
  return (
    <div>
      <form action="/signup" method="post">
        <label for="username">Username</label>
        <input type="text" placeholder="Enter Username" name="username" required />

        <label for="password">Password</label>
        <input type="password" placeholder="Enter Password" name="password" required />

        <Link to="/"><button type="submit">Signup</button></Link>
      </form>
    </div>
  );
}

export default Signup;
