import React, { useState, useEffect } from "react";
import FilterBar from "./FilterBar.jsx"
import ProfileList from './ProfileList.jsx';

const Search = ({pets, selectPet}) => {
  const [filteredPets, setFilteredPets] = useState(pets);
  const [dogBreeds, setDogBreeds] = useState([]);
  const [catBreeds, setCatBreeds] = useState([]);
  const [otherBreeds, setOtherBreeds] = useState([]);

  useEffect(() => {
    let dogs = [];
    let cats = [];
    let others = [];

    for (let i = 0; i < pets.length; i++) {
      if (pets[i].type === 'Dog' && !dogs.includes(pets[i].breed)) {
        dogs.push(pets[i].breed);
      } else if (pets[i].type === 'Cat' && !cats.includes(pets[i].breed)) {
        cats.push(pets[i].breed);
      } else if (pets[i].type === 'Other' && !others.includes(pets[i].breed)) {
        others.push(pets[i].breed);
      }
    }
    setDogBreeds(dogs);
    setCatBreeds(cats);
    setOtherBreeds(others);
  }, []);

  const filterPets = (event, selectedOptions) => {
    event.preventDefault();

    let newFilteredPets = filteredPets.filter(pet => {
      let hasType = !selectedOptions.type || pet.type.toLowerCase() === selectedOptions.type;
      let hasBreed = selectedOptions.breed.length === 0 || selectedOptions.breed.indexOf(pet.breed) !== -1;
      let hasAge = selectedOptions.age.length === 0 || selectedOptions.age.indexOf(pet.age) !== -1;
      let hasGender = selectedOptions.gender.length === 0 || selectedOptions.gender.indexOf(pet.gender) !== -1;
      let hasAvailability = selectedOptions.availability.length === 0 || selectedOptions.availability.indexOf(pet.availability) !== -1;
      let hasGoodWithChildrenDispo = true;
      let hasGoodWithOtherAnimalsDispo = true;
      let hasMustBeLeashedDispo = true;

      for (let i = 0; i < selectedOptions.disposition.length; i++) {
        if (selectedOptions.disposition[i] === 'Good with children' && (pet.good_with_children === 'Unknown' || pet.good_with_children === 'No')) {
          hasGoodWithChildrenDispo = false;
          break;
        }

        if (selectedOptions.disposition[i] === 'Good with other animals' && (pet.good_with_other_animals === 'Unknown' || pet.good_with_other_animals === 'No')) {
          hasGoodWithOtherAnimalsDispo = false;
          break;
        }

        if (selectedOptions.disposition[i] === 'Animal must be leashed at all times' && (pet.must_be_leashed === 'Unknown' || pet.must_be_leashed === 'No')) {
          hasMustBeLeashedDispo = false;
          break;
        }
      }

      return hasType && hasBreed && hasAge && hasGender && hasAvailability && hasGoodWithChildrenDispo && hasGoodWithOtherAnimalsDispo && hasMustBeLeashedDispo
    })
    setFilteredPets(newFilteredPets);
  }

  const resetPets = () => {
    setFilteredPets(pets);
  }

  return (
    <div>
      {<FilterBar filterPets={filterPets} resetPets={resetPets} dogBreeds={dogBreeds} catBreeds={catBreeds} otherBreeds={otherBreeds} />}
      {<ProfileList pets={filteredPets} selectPet={selectPet}/>}
    </div>
  );
}

export default Search;
