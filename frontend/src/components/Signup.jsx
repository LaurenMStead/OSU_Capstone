const Signup = () => {
  return (
    <div>
      <form action="/signup" method="post">
        <label for="username">Username</label>
        <input type="text" placeholder="Enter Username" name="username" required />

        <label for="password">Password</label>
        <input type="password" placeholder="Enter Password" name="password" required />

        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
