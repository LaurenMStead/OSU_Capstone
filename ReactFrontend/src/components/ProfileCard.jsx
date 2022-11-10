import React, {useEffect, useState} from "react";

//TO DO: activate the button, redirect to "profile" and send the pet_id

export default function PetProfileCard({pet_id}) {

    const [pet, setPet] = useState();

    useEffect(() => {
        const url = 'http://127.0.0.1:8000/api/pets/' + pet_id;
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setPet(data.pets);
            })
    }, []);

    return (
        <>
        { pet ?
        <div id='profile-card'>
            <div className='profile-img'> pet image here</div>
            <h1>
                {pet['name']}
            </h1>
            <div className='pet-information'>
                <p>{pet['age']}</p>
                <p>{pet['gender']}</p>
                <p>{pet['availability']}</p>
            </div>
            <button id='learn_more_button'>Learn more</button>
        </div>
            : "fetching..."}
        </>
    );
}
