import React from 'react';
import { MdPhone, MdEmail } from 'react-icons/md';

const Profile = ({ pet }) => {

    return (
        <div>
            <table>
                <tr>
                    <td>
                        <h2>{pet.name}</h2>
                        <p>Joined: {pet.date_created}</p>
                        <p>Age: {pet.age}</p>
                        <p>Gender: {pet.gender}</p>
                        <p>About Me: {pet.description}</p>
                        <p>Contact: <MdPhone/><MdEmail/></p>
                        <p>Last updated on {pet.last_updated}</p>
                    </td>
                </tr>
            </table>
        </div>
      );
    }

export default Profile;
