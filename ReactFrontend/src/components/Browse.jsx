import React, { useEffect, useState } from 'react';
import ProfileCard from './ProfileCard.jsx';

export default function Browse({ pets, selectPet }) {
    const [availablePets, setAvailablePets] = useState([]);
    const [spotlightIndex, setSpotlightIndex] = useState(0);
    const [spotlightPet, setSpotlightPet] = useState({});

    useEffect(() => {
        let filteredPets = pets.filter(pet => pet.availability === 'Available');
        for (let i = 0; i < filteredPets.length; i++) {
            let randomIndex = Math.floor(Math.random() * (i + 1));
            [filteredPets[i], filteredPets[randomIndex]] = [filteredPets[randomIndex], filteredPets[i]];
        }
        setAvailablePets(filteredPets);
        setSpotlightPet(filteredPets[0]);
    }, []);

    const getNextSpotlightPet = () => {
        let nextIndex = spotlightIndex + 1 === availablePets.length ? 0 : spotlightIndex + 1;
        setSpotlightPet(availablePets[nextIndex]);
        setSpotlightIndex(spotlightIndex + 1);
    }

  return (
    <div>
        <h1>Browse our available pets!</h1>
        <ProfileCard pet={spotlightPet} selectPet={selectPet} key="profileCard" getNextSpotlightPet={getNextSpotlightPet} />
    </div>
  );
}

// IGNORE the key={"profileCard"}, it's required or else we get an annoying warning message in the console
