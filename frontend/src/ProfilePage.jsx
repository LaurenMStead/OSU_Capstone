import React from 'react';
import { useState, useEffect } from 'react';
import NavBar from '../components/NavBar.js';
import Profile from '../components/Profile.js';

function ProfilePage() {
  const [pets, setPets] = useState([]);
  
  const loadPets = async () => {
    const response = await fetch('/pets',{method: 'GET'});
    const data = await response.json();
    setPets(data);  
  }
  
  useEffect(() => {
    loadPets();
  }, []);
  
  return (
    <div>
        <NavBar />
        <br></br>
        <br></br>
        <Profile />
    </div>
  );
}

export default ProfilePage;