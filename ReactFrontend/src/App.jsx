import './App.css';
import React, {useState, useEffect} from "react";
import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import NotFound from "./components/NotFound.jsx";
import Browse from "./components/Browse.jsx";
import Search from "./components/Search.jsx"
import ProfileList from './components/ProfileList.jsx';
import Profile from "./components/Profile.jsx"
import NavBar from './components/NavBar.jsx';
import NewPet from './components/NewPet.jsx';
import EditPet from './components/EditPet.jsx';
import Footer from './components/Footer.jsx';
import AuthContext from "./context/AuthContext.jsx"

function App() {

  const [pets, setPets] = useState([]);
  const [selectedPet, setSelectedPet] = useState({});
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const auth = {isLoggedIn, setIsLoggedIn, isAdmin, setIsAdmin};

  useEffect(() =>{
      getPets();
  }, []);

  const getPets = () => {
        fetch('http://127.0.0.1:8000/api/pets', {method: 'POST'})
        .then((response) => {
            return response.json()
        })
        .then((data) => {
          if (data['pets'] !== undefined){
              setPets(data['pets'])
          }
          else{
            alert("Error getting pets - try again later");
          }
      })
        .catch(err => console.log(err))
  }

  const selectPet = (selectedPet) => {
    // set pet to the selected pet
    setSelectedPet(selectedPet);
    // navigate to '/pet/:pet_id
    navigate(`/pet/${selectedPet.id}`);
  }

  return (
      <div id="App">
          <AuthContext.Provider value={auth}>
            <NavBar />
            <Routes>
                <Route path="feed" element={<ProfileList pets={pets} selectPet={selectPet} />}/>
                <Route path="/login" element={<Login/>} />
                <Route path="/signup" element={<Signup/>} />
                <Route path="/browse" element={<Browse pets={pets} selectPet={selectPet} />} />
                <Route path="/search" element={<Search pets={pets} selectPet={selectPet} />} />
                <Route path="/pet/:id" element={<Profile pet={selectedPet} />} />
                <Route path="/newPet" element={<NewPet />} />
                <Route path="/editPet" element={<EditPet selectedPet={selectedPet}/>} />
                <Route path="/404" element={<NotFound />} />
                <Route path="/" element={<Navigate to="/feed" replace />} />
            </Routes>
            <Footer/>
          </AuthContext.Provider>
      </div>
  );
}

export default App;
