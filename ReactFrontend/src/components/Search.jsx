import React from "react";
import FilterBar from "./FilterBar.jsx"
import ProfileList from './ProfileList.jsx';

const Search = ({pets, selectPet}) => {
  //  TO DO:
    //  - build search bar
    //  - render only pets that fit the filter options


  return (
    <div>
      <h1>This is the Search page</h1>
      {<FilterBar />}
      {<ProfileList pets={pets} selectPet={selectPet}/>}
    </div>
  );
}

export default Search;
