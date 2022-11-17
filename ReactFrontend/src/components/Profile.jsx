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
            <table>
                <tr>
                    <td>
                        <h2>{pet.name}</h2>
                        <p><b>Joined:</b> {pet.date_created}</p>
                        <p><b>Age:</b> {pet.age}</p>
                        <p><b>Gender:</b> {pet.gender}</p>
                        <p><b>About Me:</b> {pet.description}</p>
                        <p><b>Availability:</b> {availability}</p>
                        <p><b>Contact:</b> <MdPhone/><MdEmail/></p>
                        <p>Last updated on {pet.last_updated}</p>
                        {getSubmitButton()}
                    </td>
                </tr>
            </table>
        </div>
      );
    }

export default Profile;
