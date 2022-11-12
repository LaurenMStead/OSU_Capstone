import React from 'react';
import ProfileCard from './ProfileCard.jsx';

export default function Browse({ pets, selectPet }) {

  //TO-DO: create HTTP request with axios. GET 1 pet.

  return (
    <div>
        <h1>Browse our available pets!</h1>
        {pets.map((pet) => pet.availability === 'Available' ? <ProfileCard pet={pet} selectPet={selectPet} key={pet.id} /> : null )}
    </div>
  );
}

// IGNORE the key={pet.id}, it's required or else we get an annoying warning message in the console
