import React, { useState } from "react";
import FilterBar from "./FilterBar.jsx"
import ProfileList from './ProfileList.jsx';

const Search = ({pets, selectPet}) => {
  const [filteredPets, setFilteredPets] = useState(pets);

  const filterPets = (selectedOptions) => {
    let newFilteredPets = filteredPets.filter(pet => {
      let hasType = pet.type === selectedOptions.type;
      let hasBreed = selectedOptions.breed.indexOf(pet.breed) !== -1;
      let hasAge = selectedOptions.age.indexOf(pet.age) !== -1;

      for (let i = 0; i < selectedOptions.disposition.length; i++) {
        if (pet.disposition.indexOf(selectedOptions.disposition[i]) === -1) {
          // return false if dispo is not found
          return false;
        }
      }

      return hasType && hasBreed && hasAge
    })

    setFilteredPets(newFilteredPets);
  }

  return (
    <div>
      <h1>This is the Search page</h1>
      {<FilterBar filterPets={filterPets} />}
      {<ProfileList pets={filteredPets} selectPet={selectPet}/>}
    </div>
  );
}

export default Search;
