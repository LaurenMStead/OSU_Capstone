import React, {useContext, useState} from 'react';
import { MdPhone, MdEmail } from 'react-icons/md';
import AuthContext from "../context/AuthContext";

const Profile = ({ pet }) => {
    const [availability, setAvailability] = useState(pet.availability);
    const auth = useContext(AuthContext)

    const adoptPet = async (pet) => {
        if (auth.isLoggedIn){
                    await fetch(`http://127.0.0.1:8000/api/pets`, {
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
    else{
        alert("Please log in or sign up to view information on our adoptable pets!");
        }
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

    const getEditButton = () => {
        return (
            auth.isAdmin === true ?
                <button className="Profile_button" onClick={() => adoptPet(pet)}>Edit</button>
            :
                <></>
        )
    }

    return (
        <div id="Profile">
            <table>
             <tbody>
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
                        <div className="Profile_buttons">
                            {getSubmitButton()}
                            {getEditButton()}
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
      );
    }

export default Profile;
