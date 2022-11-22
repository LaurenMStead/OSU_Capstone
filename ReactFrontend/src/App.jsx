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
import NewPet from './components/NewPet.jsx';
import { sampleData } from './sampleData.js';

import AuthContext from "./context/AuthContext.jsx"

function App() {
  const [pets, setPets] = useState(sampleData);
  const [selectedPet, setSelectedPet] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const selectPet = (selectedPet) => {
    // set pet to the selected pet
    setSelectedPet(selectedPet);
    // navigate to '/pet/:pet_id
    navigate(`/pet/${selectedPet.id}`);
  }

  const auth = {isLoggedIn, setIsLoggedIn, isAdmin, setIsAdmin};

  return (
      <div id="App">
          <AuthContext.Provider value={auth}>
            <NavBar/>
            <Routes>
                <Route path="feed" element={<ProfileList pets={pets} selectPet={selectPet} />} />
                <Route path="/login" element={<Login/>} />
                <Route path="/signup" element={<Signup/>} />
                <Route path="/browse" element={<Browse pets={pets} selectPet={selectPet} />} />
                <Route path="/search" element={<Search pets={pets} selectPet={selectPet} />} />
                <Route path="/pet/:id" element={<Profile isAdmin={isAdmin} pet={selectedPet} />} />
                <Route path="/newPet" element={<NewPet />} />
                <Route path="/404" element={<NotFound />} />
                <Route path="/" element={<Navigate to="/feed" replace />} />
            </Routes>
          </AuthContext.Provider>
      </div>
  );
}

export default App;
