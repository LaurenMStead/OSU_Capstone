import React from 'react';
import ProfileCard from './ProfileCard.jsx';

const ProfileList = ({ pets, selectPet }) => {
  return (
    <div id="ProfileList">
      {pets.length === 0 ? <h2 className="ProfileList_empty">No pets fit those options! Try a different search.</h2> : pets.map((pet) => <ProfileCard pet={pet} selectPet={selectPet} key={pet.id} />)}
    </div>
  );
}

export default ProfileList;

// IGNORE the key={pet.id}, it's required or else we get an annoying warning message in the console