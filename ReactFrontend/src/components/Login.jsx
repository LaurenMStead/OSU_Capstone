import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

const Login = ({ setIsLoggedIn, setIsAdmin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const loginUser = async () => {
    await fetch('http://127.0.0.1:8000/api/login', {
      method: 'POST',
      body: JSON.stringify({ username , password })
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            if(data['success'] !== undefined){
                setIsLoggedIn(data['success']);
                setIsAdmin(data['is_superuser']);
                console.log("login success");
                navigate('/');
            }
            else if (data['Error'] !== undefined){
              // alert if username is already taken
                console.log("error")
              alert(data['Error']);
            }
            else{
              // any other error is considered a server error
              console.log(data);
              console.log("other error")
              alert('Internal server error : try logging in again later');
            }
            console.log("passed logic")
          })
        .catch(err => console.log(err))
  }

  return (
    <form id="Login">
      <fieldset className="Login_outerFieldset">
          <fieldset className="Login_innerFieldset">
            <label className="Login_label" htmlFor="username">Username</label>
            <input className="Login_input" id="username" type="text" placeholder="Enter Username" name="username" onChange={(e) => handleUsernameChange(e)} required />

            <label className="Login_label" htmlFor="password">Password</label>
            <input className="Login_input" id="password" type="password" placeholder="Enter Password" name="password" onChange={(e) => handlePasswordChange(e)} required />

            <button className="Login_button" type="submit" onClick={() => loginUser()}>Login</button>

            <Link to="/signup"><button className="Login_createButton" type="submit">Create an Account</button></Link>
        </fieldset>
      </fieldset>
    </form>
  );
}

export default Login;
