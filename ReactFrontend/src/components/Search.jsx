import React, { useState } from "react";
import FilterBar from "./FilterBar.jsx"
import ProfileList from './ProfileList.jsx';

const Search = ({pets, selectPet}) => {
  const [filteredPets, setFilteredPets] = useState(pets);

  const filterPets = (event, selectedOptions) => {
    event.preventDefault();

    let newFilteredPets = filteredPets.filter(pet => {
      let hasType = !selectedOptions.type || pet.type.toLowerCase() === selectedOptions.type;
      let hasBreed = selectedOptions.breed.length === 0 || selectedOptions.breed.indexOf(pet.breed) !== -1;
      let hasAge = selectedOptions.age.length === 0 || selectedOptions.age.indexOf(pet.age) !== -1;
      let hasDisposition = true;
      let hasGender = !selectedOptions.gender || pet.gender === selectedOptions.gender;

      for (let i = 0; i < selectedOptions.disposition.length; i++) {
        if (pet.disposition.indexOf(selectedOptions.disposition[i]) === -1) {
          hasDisposition = false;
          break;
        }
      }

      return hasType && hasBreed && hasAge && hasDisposition && hasGender;
    })
    setFilteredPets(newFilteredPets);
  }

  const resetPets = () => {
    setFilteredPets(pets);
  }

  return (
    <div>
      {<FilterBar filterPets={filterPets} resetPets={resetPets} />}
      {<ProfileList pets={filteredPets} selectPet={selectPet}/>}
    </div>
  );
}

export default Search;
