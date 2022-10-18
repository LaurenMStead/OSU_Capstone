import { useState } from "react";
import {
  Route,
  Routes,
} from 'react-router-dom';
import NavBar from './NavBar.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import ProfileList from './ProfileList.jsx';
import Profile from './Profile.jsx';
import Search from './Search.jsx';
import Browse from './Browse.jsx';

const App = () => {
  const [pets, setPets] = useState([]);

  // TO-DO: need to send request to get list of pets, set pets state
  /*
  componentDidMount() {
    // when server starts, it will send a request to Petfinder API to get all animals and save it into database
    // when component mounts, it will send a request to the server to get 10 at a time for the feed and when someone infinitely scrolls should we keep sending get requests?
      // or should we just get all of the animals when component mounts and save in the state?
  }
  */

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/login" component={<Login />} />
        <Route path="/signup" component={<Signup />} />
        <Route path="/feed" component={<ProfileList />} />
        <Route path="/pet/*" component={<Profile />} />
        <Route path="/search" component={<Search />} />
        <Route path="/browse" component={<Browse />} />
        <Route path="/">
          <Redirect to="/feed" />
        </Route>
        <Route path="*" component={() => '404 NOT FOUND'} />
      </Routes>
    </div>
  );
}

export default App;
