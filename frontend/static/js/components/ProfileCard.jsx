import React from 'react';

const ProfileCard = ({ pet, selectPet }) => {
  return (
    <div>
      <img src={pet.pic} alt={pet.name} onClick={() => selectPet(pet) }></img>
      <h2>{pet.name}</h2>
      <p>Joined: {pet.dateCreated}   Age: {pet.age} </p>
    </div>
  );
}

export default ProfileCard;
