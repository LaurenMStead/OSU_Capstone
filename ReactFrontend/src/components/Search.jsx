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
      let hasGender = selectedOptions.gender.length === 0 || selectedOptions.gender.indexOf(pet.gender) !== -1;
      let hasGoodWithChildrenDispo = true;
      let hasGoodWithOtherAnimalsDispo = true;
      let hasMustBeLeashedDispo = true;

      for (let i = 0; i < selectedOptions.disposition.length; i++) {
        if (selectedOptions.disposition[i] === 'Good with children' && pet.good_with_children === 'Unknown') {
          hasGoodWithChildrenDispo = false;
          break;
        }

        if (selectedOptions.disposition[i] === 'Good with other animals' && pet.good_with_other_animals === 'Unknown') {
          hasGoodWithOtherAnimalsDispo = false;
          break;
        }

        if (selectedOptions.disposition[i] === 'Animal must be leashed at all times' && pet.must_be_leashed === 'Unknown') {
          hasMustBeLeashedDispo = false;
          break;
        }
      }
      debugger;
      return hasType && hasBreed && hasAge && hasGender && hasGoodWithOtherAnimalsDispo && hasGoodWithOtherAnimalsDispo && hasMustBeLeashedDispo
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
