import FilterBar from './FilterBar.jsx';
import ProfileList from './ProfileList.jsx';

const Search = () => {
  const [filteredPets, setFilteredPets] = [];

  const filterPets = () => {
    axios.get('/pets/:')
  }

  return (
    <div>
      <FilterBar filterPets={filterPets}/>
      <ProfileList />
    </div>
  );
}

export default Search;
