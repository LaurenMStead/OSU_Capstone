import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import NotFound from "./components/NotFound.jsx";
import Browse from "./components/Browse.jsx";
import Search from "./components/Search.jsx"
import Profile from "./components/Profile.jsx"
import Feed from "./components/Feed.jsx";

function App() {
  return (
      <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Navigate to="/feed" replace />} />
                  <Route path="/feed" element={<Feed/>} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/browse" element={<Browse />} />
                  <Route path="/search" element={<Search />} />
                  <Route path="/profile/:id" element={<Profile />} />
                  <Route path="/404" element={<NotFound />} />
              </Routes>
      </BrowserRouter>
  );
}

export default App;
