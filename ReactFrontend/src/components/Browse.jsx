import React from 'react';
import PetProfileCard from './ProfileCard.jsx';
import {useEffect, useState} from "react";
import NavBar from "./NavBar.jsx";

export default function Browse() {

    const [pets, viewPets] = useState();

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/pets')
            .then((response) => response.json())
            .then((data) => {
                viewPets(data.pets)
                console.log(pets)
            })
    }, []);

    function IfAvailable(props){
        const curr_pet = props.pets

        if(curr_pet.availability === "Available"){
            return <PetProfileCard pet_id={curr_pet.id}/>
        }
    }

  //TO-DO: create HTTP request with axios. GET 1 pet.

  return (
    <>
        <NavBar/>
        <h1>Browse our available pets!</h1>
        {pets ? pets.map((pets) => {
            return <IfAvailable pets={pets}/>
        }) : ''}
    </>
  );
}
