import React from "react";

//TO DO: activate the button, redirect to "profile" and send the pet_id

export default function ProfileCard({ pet, selectPet, getNextSpotlightPet }) {

    const viewBrowseFeature = () => {
        if (getNextSpotlightPet) {
            return (
                <>
                    <button id='rejectBtn' onClick={() => getNextSpotlightPet()} >View another pet</button>
                    <button id='acceptBtn' onClick={() => selectPet(pet)} >Learn more</button>
                </>
            )
        }
    }
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
            {viewBrowseFeature()}
        </div>
    );
}
