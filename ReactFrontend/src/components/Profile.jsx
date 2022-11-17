import React, { useState } from 'react';
import { MdPhone, MdEmail } from 'react-icons/md';

const Profile = ({ pet }) => {
    const [availability, setAvailability] = useState(pet.availability);

    const adoptPet = (pet) => {
        fetch(`http://127.0.0.1:8000/api/pets`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "id": pet.id })
        })
        .then(response => response.json())
        .then(response => setAvailability(JSON.stringify(response)))
    }

    const getSubmitButton = () => {
        return (
            availability === 'Available' || 'Pending' ?
                <button className="Profile_button" onClick={() => adoptPet(pet)}>Adopt Me</button>
            :
                <button
                    className="Profile_button"
                    onClick={() => adoptPet(pet)}
                    title="Unavailable for adoption"
                    disabled>
                >Adopt Me</button>
        )
    }

    return (
        <div>
        <div className="ProfileCard_image"> pet image here</div>
            <table>
                <tr>
                    <td>
                        <h2>{pet.name}</h2>
                        <p>Joined: {pet.date_created}</p>
                        <p>Age: {pet.age}</p>
                        <p>Gender: {pet.gender}</p>
                        <p>About Me: {pet.description}</p>
                        <p>Availability: {availability}</p>
                        <p>Contact: <MdPhone/><MdEmail/></p>
                        <p>Last updated on {pet.last_updated}</p>
                        {getSubmitButton()}
                    </td>
                </tr>
            </table>
        </div>
      );
    }

export default Profile;
