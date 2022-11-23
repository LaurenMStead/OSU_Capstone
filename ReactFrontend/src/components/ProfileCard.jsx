import React from "react";

export default function ProfileCard({ pet, selectPet, getNextSpotlightPet }) {

    const viewBrowseFeature = () => {
        if (getNextSpotlightPet) {
            return (
                <>
                    <button className="ProfileCard_button" onClick={() => getNextSpotlightPet()} >Next Pet</button>
                </>
            )
        }
    }
    return (
        <div id="ProfileCard">
            <fieldset className="ProfileCard_outerFieldset">
                <fieldset className="ProfileCard_innerFieldset">
                    <img className="ProfileCard_item" onClick={() => selectPet(pet)} src={pet.image}/>
                    <h1 className="ProfileCard_item" onClick={() => selectPet(pet)}>
                        {pet.name}
                    </h1>
                    <p className="ProfileCard_item" ><b>Age:</b> {pet.age}</p>
                    <p className="ProfileCard_item" ><b>Gender:</b> {pet.gender}</p>
                    <p className="ProfileCard_item" ><b>Dispositions:</b>
                        {pet.good_with_children === 'Yes' ? ' Good with children.' : null}
                        {pet.good_with_other_animals === 'Yes' ? ' Good with other animals. ' : null}
                        {pet.must_be_leashed === 'Yes' ? ' Animal must be leashed at all times.' : null}
                        {pet.good_with_children === 'Unknown' && pet.good_with_other_animals === 'Unknown'  && pet.must_be_leashed === 'Unknown' ? ' None' : null}
                    </p>
                    <p className="ProfileCard_item" ><b>Availability:</b> {pet.availability}</p>
                    <p className="ProfileCard_item"><b>Date Created:</b> {new Date(pet.date_created).toLocaleDateString()}</p>
                    {viewBrowseFeature()}
                    <button className="ProfileCard_button" onClick={() => selectPet(pet)} >Learn More</button>
                </fieldset>
            </fieldset>
        </div>
    );
}

/*
When image links are ready, use:
    <img className="ProfileCard_image" src={pet.image} onClick={() => selectPet(pet)}/>
*/