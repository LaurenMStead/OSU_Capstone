import React, {useContext} from 'react';
import {Link, useNavigate} from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Signup = () => {

    const auth = useContext(AuthContext)
    const navigate = useNavigate();

    const handleSubmit = async e => {
      e.preventDefault();
      const username = e.target.username.value;
      const password = e.target.password.value;
      const admin = document.getElementById("admin");
      // console.log(username, password, admin.checked);
      // const retypePassword = e.target.password2.value;
      await signupUser(username, password, admin.checked);
    };

  const signupUser = async (username, password, admin) => {
    await fetch('http://127.0.0.1:8000/api/signup', {
      method: 'POST',
      body: JSON.stringify({ username , password , is_superuser: admin })
    })
        .then((response) => response.json())
        .then((data) => {
          if (data['is_superuser'] !== undefined )
          {
            auth.setIsLoggedIn(true);
            auth.setIsAdmin(data['is_superuser']);
           // auth.setIsAdmin(data['is_superuser']);
            navigate('/');
          }
          else if (data['username'] !== undefined){
              // alert if username is already taken
              alert(data['username'][0]);
          }
          else{
              // any other error is considered a server error
              console.log(data);
              alert('Internal server error : try logging in again later');
          }
        })
        .catch(err => console.log(err));
  }

  return (
    <form id="Signup" onSubmit={handleSubmit}>
      <fieldset className="Signup_outerFieldset">
        <fieldset className="Signup_innerFieldset">
          <label className="Signup_label" htmlFor="username">Username</label>
          <input className="Signup_input" id="username" type="text" placeholder="Enter Username" name="username" required />

          <label className="Signup_label" htmlFor="password">Password</label>
          <input className="Signup_input" id="password" type="password" placeholder="Enter Password" name="password"  required />

          <label className="Signup_label" htmlFor="admin">Check the box if you're a Shelter</label>
          <input className="Signup_input" id="admin" type="checkbox" name="admin"/>

          <button className="Signup_button" type="submit">Signup</button>

          <Link to="/login" ><button className="Signup_loginButton" type="submit">Already have an account? Login here</button></Link>
        </fieldset>
      </fieldset>
    </form>
  );
}

export default Signup;
