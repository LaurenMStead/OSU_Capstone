import React from "react";

//TO DO: activate the button, redirect to "profile" and send the pet_id

export default function ProfileCard({ pet, selectPet, getNextSpotlightPet }) {

    const viewBrowseFeature = () => {
        if (getNextSpotlightPet) {
            return (
                <>
                    <button id="profileCard_rejectBtn" onClick={() => getNextSpotlightPet()} >View another pet</button>
                    <button id="profileCard_acceptBtn" onClick={() => selectPet(pet)} >Learn more</button>
                </>
            )
        }
    }
    return (
        <div id="profileCard">
            <div className="profileCard_image"> pet image here</div>
            <h1 className="profileCard_name">
                {pet.name}
            </h1>
            <div className="profileCard_info">
                <p className="profileCard_age">{pet.age}</p>
                <p className="profileCard_gender">{pet.gender}</p>
                <p className="profileCard_availability">{pet.availability}</p>
            </div>
            {viewBrowseFeature()}
        </div>
    );
}
