import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Signup = ({ setIsLoggedIn, setIsAdmin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [adminCheck, setAdminCheck] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleAdminCheckChange = () => {
    setAdminCheck(!adminCheck);
  }

  const onSubmit = () => {
    fetch('http://127.0.0.1:8000/api/signup', {
      method: 'POST',
      body: JSON.stringify({ username , password , admin: adminCheck })
    })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setIsLoggedIn(true);
          setIsAdmin(adminCheck);
        })
        .catch(err => console.log(err))
  }

  return (
    <form id="Signup">
      <fieldset className="Signup_outerFieldset">
        <fieldset className="Signup_innerFieldset">
          <label className="Signup_label" for="username">Username</label>
          <input className="Signup_input" type="text" placeholder="Enter Username" name="username" onChange={(e) => handleUsernameChange(e)} required />

          <label className="Signup_label" for="password">Password</label>
          <input className="Signup_input" type="password" placeholder="Enter Password" name="password" onChange={(e) => handlePasswordChange(e)} required />

          <label className="Signup_label" for="admin">Check the box if you're a Shelter</label>
          <input className="Signup_input" type="checkbox" name="admin" value="admin" onChange={() => handleAdminCheckChange()} />

          <button className="Signup_button" type="submit" onClick={() => onSubmit()}>Signup</button>

          <Link to="/login" ><button className="Signup_loginButton" type="submit">Already have an account? Login here</button></Link>
        </fieldset>
      </fieldset>
    </form>
  );
}

export default Signup;
