import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import NavBar from "./NavBar.jsx";

const Search = () => {

  //  TO DO:
    //  - build search bar
    //  - render only pets that fit the filter options

    // gets all pets
    const [pets, viewPets] = useState();

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/pets')
            .then((response) => response.json())
            .then((data) => {
                viewPets(data.pets)
            })
    }, []);



  return (
    <div>
        <NavBar/>
      <h1>This is the Search page</h1>
      {/*<FilterBar filterPets={filterPets}/>*/}
      {/*<ProfileList selectPet={selectPet}/>*/}
    </div>
  );
}

export default Search;
