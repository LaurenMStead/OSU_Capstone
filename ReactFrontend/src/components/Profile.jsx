import React, {useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { MdPhone, MdEmail } from 'react-icons/md';
import AuthContext from "../context/AuthContext";
import { faker } from '@faker-js/faker';

const Profile = ({ pet }) => {
    const [availability, setAvailability] = useState(pet.availability);
    const auth = useContext(AuthContext)
    const navigate = useNavigate();

    const adoptPet = async (pet) => {
        if (auth.isLoggedIn) {
            await fetch(`http://127.0.0.1:8000/api/pets`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "id": pet.id })
            })
            .then(response => response.json())
            .then(response => setAvailability('Pending'))
        } else {
            alert("Please log in or sign up to view information on our adoptable pets!");
        }
    }

    const editPet = () => {
        navigate('/editPet');
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
                <button className="Profile_button" onClick={() => editPet()}>Edit</button>
            :
                <></>
        )
    }

    return (
        <div id="Profile">
            <fieldset className="Profile_outerFieldset">
            <fieldset className="Profile_innerFieldset">
                <img className="Profile_item" src={pet.image}/>

                <h2 className="Profile_header">{pet.name}</h2>

                <p className="Profile_item"><b>Age:</b> {pet.age}</p>
                <p className="Profile_item"><b>Gender:</b> {pet.gender}</p>
                <p className="Profile_item"><b>Breed:</b> {pet.breed}</p>
                <p className="Profile_item"><b>About Me:</b> {pet.description}</p>
                <ul className="Profile_item" ><b>Dispositions:</b>
                    <li><b>Good with children:</b> {pet.good_with_children}</li>
                    <li><b>Good with other animals:</b> {pet.good_with_other_animals}</li>
                    <li><b>Must be leashed:</b> {pet.must_be_leashed}</li>
                </ul>
                <p className="Profile_item"><b>Availability:</b> {availability}</p><p className="Profile_item"><b>News Item:</b> {pet.news_blurb}</p>
                <p className="Profile_item"><b>Contact:</b> <MdPhone/><MdEmail/></p>
                <p className="Profile_item">Last updated on {new Date(pet.last_updated).toLocaleDateString()}</p>
                <p className="Profile_item">Profile created on {new Date(pet.date_created).toLocaleDateString()}</p>

                {getSubmitButton()}
                {getEditButton()}
            </fieldset>
            </fieldset>
        </div>
    );
}

export default Profile;
