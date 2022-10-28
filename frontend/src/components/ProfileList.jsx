import React from 'react';
import ProfileCard from './ProfileCard.jsx';

const ProfileList = ({ pets, selectPet }) => {
  return (
    <div>
      {pets.map((pet) => <ProfileCard pet={pet} selectPet={selectPet} />)}
    </div>
  );
}

export default ProfileList;
