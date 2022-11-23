import React, {useContext} from 'react';
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Login = () => {

    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async e => {
      e.preventDefault();
      const username = e.target.username.value;
      const password = e.target.password.value;
      await loginUser(username, password);
    };

    const loginUser = async (username, password) => {
    await fetch('http://127.0.0.1:8000/api/login', {
      method: 'POST',
      body: JSON.stringify({ username , password })
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            if(data['is_superuser'] !== undefined){
                auth.setIsLoggedIn(true);
                auth.setIsAdmin(data['is_superuser']);
                navigate('/');
            }
            else if (data['Error'] !== undefined){
              alert(data['Error']);
            }
            else{
              // any other error is considered a server error
              console.log(data);
              alert('Internal server error : try logging in again later');
            }
          })
        .catch(err => console.log(err))
    }

  return (
    <form id="Login" onSubmit={handleSubmit}>
      <fieldset className="Login_outerFieldset">
          <fieldset className="Login_innerFieldset">

            <label className="Login_label" htmlFor="username">Username</label>
            <input className="Login_input" id="username" type="text" placeholder="Enter Username" name="username" required />

            <label className="Login_label" htmlFor="password">Password</label>
            <input className="Login_input" id="password" type="password" placeholder="Enter Password" name="password" required/>

            <button className="Login_button" type="submit">Login</button>

            <Link to="/signup"><button className="Login_createButton" type="submit">Create an Account</button></Link>
        </fieldset>
      </fieldset>
    </form>
  );
}

export default Login;
