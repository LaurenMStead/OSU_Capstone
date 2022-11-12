import React from "react";

//TO DO: activate the button, redirect to "profile" and send the pet_id

export default function ProfileCard({ pet, selectPet }) {
    return (
        <div id='profileCard'>
            <div className='profileImg'> pet image here</div>
            <h1>
                {pet.name}
            </h1>
            <div className='petInfo'>
                <p>{pet.age}</p>
                <p>{pet.gender}</p>
                <p>{pet.availability}</p>
            </div>
            <button id='learnMoreBtn' onClick={() => selectPet(pet)} >Learn more</button>
        </div>
    );
}
