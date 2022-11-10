import React, {useState, useEffect, Component} from "react";
import {
    BrowserRouter, redirect, Route, Routes, useHistory
} from 'react-router-dom';
import NavBar from './NavBar.jsx';
import NavbarCollapse from "react-bootstrap/NavbarCollapse";


const Feed = () => {


  // TO-DO: need to send request to get list of pets, set pets state
  /*
  useEffect() {
    // when server starts, it will send a request to Petfinder API to get all animals and save it into database
    // when component mounts, it will send a request to the server to get 10 at a time for the feed and when someone infinitely scrolls should we keep sending get requests?
      // or should we just get all of the animals when component mounts and save in the state?
  }
  */

  // const selectPet = (selectedPet) => {
  //   // set pet to the selected pet
  //   setPet(selectedPet);
  //   // navigate to '/pet/:pet_id
  //   history.push(`/pet/${selectedPet.id}`);
  // }

  /*
  Updates from Lauren:
    I wanted to make sure this would render for you before pushing it.
    ** note about testing: I've noticed that if I update a jsx files and the page renders blank,
                            there's probably an error, but it won't tell you where.

    I updated my react-router-dom to version 6 because I was using a newer version of React
        - requires the BrowserRouter wrapper to render page whenever routes are used which I added here.
        - "component" is also now "element"
        - switch and redirect are deprecated, so I updated/removed as necessary

   */
    return (
        <div>
            <h1>ADOPTR</h1>
            <NavBar/>
        </div>
    );
}

export default Feed;
