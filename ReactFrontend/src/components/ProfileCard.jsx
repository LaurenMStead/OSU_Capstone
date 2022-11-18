import React from "react";

export default function ProfileCard({ pet, selectPet, getNextSpotlightPet }) {

    const viewBrowseFeature = () => {
        if (getNextSpotlightPet) {
            return (
                <>
                    <button className="ProfileCard_button" onClick={() => selectPet(pet)} >Learn More</button>
                    <button className="ProfileCard_button" onClick={() => getNextSpotlightPet()} >Next Pet</button>
                </>
            )
        }
    }
    return (
        <div id="ProfileCard">
            <div className="ProfileCard_image" onClick={() => selectPet(pet)}> pet image here</div>
            <h1 className="ProfileCard_name" id = "ProfileCard_name">
                {pet.name}
            </h1>
            <div className="ProfileCard_info">
                <p className="ProfileCard_age" id = "ProfileCard_age">Age: {pet.age}</p>
                <p className="ProfileCard_gender" id = "ProfileCard_gender">Gender: {pet.gender}</p>
                <p className="ProfileCard_availability" id = "ProfileCard_availability">Availability: {pet.availability}</p>
            </div>
            {viewBrowseFeature()}
        </div>
    );
}
