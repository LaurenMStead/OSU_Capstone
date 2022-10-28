import React from 'react';
import FilterBar from './FilterBar.jsx';
import ProfileList from './ProfileList.jsx';

const Search = ({ selectPet }) => {
  const [filteredPets, setFilteredPets] = [];

  const filterPets = () => {
    axios.get('/pets/:')
  }

  return (
    <div>
      <FilterBar filterPets={filterPets}/>
      <ProfileList selectPet={selectPet}/>
    </div>
  );
}

export default Search;
