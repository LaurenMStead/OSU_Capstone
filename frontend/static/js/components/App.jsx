import { useState, useEffect } from "react";
import {
  Route,
  Routes,
  useHistory,
} from 'react-router-dom';
import NavBar from './NavBar.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import ProfileList from './ProfileList.jsx';
import Profile from './Profile.jsx';
import Search from './Search.jsx';
import Browse from './Browse.jsx';

const App = () => {
  const [pet, setPet] = useState({
    type: 'dog',
    breed: 'poodle',
    age: 'senior',
    disposition: ['Good with children'],
    pic: '',
    dateCreated: '10/26/2012'
  });
  const [pets, setPets] = useState([
    {
      type: 'dog',
      breed: 'poodle',
      age: 'senior',
      disposition: ['Good with children'],
      pic: '',
      dateCreated: '10/26/2012'
    },
    {
      type: 'cat',
      breed: 'domestic shorthair',
      age: 'adult',
      disposition: ['Good with children'],
      pic: '',
      dateCreated: '10/26/2017'
    },
    {
      type: 'other',
      breed: 'turtle',
      age: 'baby',
      disposition: [],
      pic: '',
      dateCreated: '8/26/2022'
    },
    {
      type: 'other',
      breed: 'fish',
      age: 'youth',
      disposition: [],
      pic: '',
      dateCreated: '10/26/2019'
    },
    {
      type: 'dog',
      breed: 'German Shepherd',
      age: 'senior',
      disposition: ['Animal must be leashed at all times', 'Good with other animals'],
      pic: '',
      dateCreated: '10/26/2012'
    },
    {
      type: 'cat',
      breed: 'Mancoon',
      age: 'adult',
      disposition: ['Good with children', 'Good with other animals'],
      pic: '',
      dateCreated: '10/26/2017'
    }
  ]);

  // TO-DO: need to send request to get list of pets, set pets state
  /*
  useEffect() {
    // when server starts, it will send a request to Petfinder API to get all animals and save it into database
    // when component mounts, it will send a request to the server to get 10 at a time for the feed and when someone infinitely scrolls should we keep sending get requests?
      // or should we just get all of the animals when component mounts and save in the state?
  }
  */

  const selectPet = (selectedPet) => {
    // set pet to the selected pet
    setPet(selectedPet);
    // navigate to '/pet/:pet_id
    history.push(`/pet/${selectedPet.id}`);
  }

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/login" component={<Login />} />
        <Route path="/signup" component={<Signup />} />
        <Route path="/feed" component={<ProfileList pets={pets} selectPet={selectPet} />} />
        <Route path="/pet/*" component={<Profile pet={pet} />} />
        <Route path="/search" component={<Search pets={pets} selectPet={selectPet} />} />
        <Route path="/browse" component={<Browse selectPet={selectPet} />} />
        <Route path="/">
          <Redirect to="/feed" />
        </Route>
        <Route path="*" component={() => '404 NOT FOUND'} />
      </Routes>
    </div>
  );
}

export default App;
