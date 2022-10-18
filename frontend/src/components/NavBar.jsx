import { useNavigate } from 'react-router-dom';

const NavBar = () =>  {
  const navigate = useNavigate();

  return (
    <div id="navBar">
      <button id="homeButton" onClick={() => navigate('/feed')}>Home</button>
      <button id="searchButton" onClick={() => navigate('/search')}>Search</button>
      <button id="browseButton" onClick={() => navigate('/browse')}>Browse</button>
      <button id="loginButton" onClick={() => navigate('/login')}>Login</button>
    </div>
  );
}

export default NavBar;
