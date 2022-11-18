import './App.css';
import React, {useState, useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import NotFound from "./components/NotFound.jsx";
import Browse from "./components/Browse.jsx";
import Search from "./components/Search.jsx"
import ProfileList from './components/ProfileList.jsx';
import Profile from "./components/Profile.jsx"
import NavBar from './components/NavBar.jsx';
import { sampleData } from './sampleData.js';

function App() {
  const [pets, setPets] = useState(sampleData);
  const [selectedPet, setSelectedPet] = useState({});
  const [isAdmin, setIsAdmin] = useState(true);
  const navigate = useNavigate();
/*
  useEffect(() => {
      fetch('http://127.0.0.1:8000/api/pets')
        .then((response) => response.json())
        .then((data) => {
          console.log(data.pets);
          setPets(data.pets);
        })
        .catch(err => console.log(err))
  }, []);
*/
  const selectPet = (selectedPet) => {
    // set pet to the selected pet
    setSelectedPet(selectedPet);
    // navigate to '/pet/:pet_id
    navigate(`/pet/${selectedPet.id}`);
  }

  return (
      <div>
        <NavBar/>
        <Routes>
          <Route path="feed" element={<ProfileList pets={pets} selectPet={selectPet} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/browse" element={<Browse pets={pets} selectPet={selectPet} />} />
          <Route path="/search" element={<Search pets={pets} selectPet={selectPet} />} />
          <Route path="/pet/:id" element={<Profile isAdmin={isAdmin} pet={selectedPet} />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="/" element={<Navigate to="/feed" replace />} />
        </Routes>
      </div>
  );
}

export default App;
