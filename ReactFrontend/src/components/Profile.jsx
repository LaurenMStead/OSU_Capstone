import React from 'react';
import { MdPhone, MdEmail } from 'react-icons/md';
import {useEffect} from "react";

const Profile = ( pet_id ) => {

    return (
        <div>
            <table>
                <tr>
                    <td>
                        <h2>{this.state.name}</h2>
                        <p>Joined: {this.state.date_created}</p>
                        <p>Age: {this.state.age}</p>
                        <p>Gender: {this.state.gender}</p>
                        <p>About Me: {this.state.description}</p>
                        <p>Contact: <MdPhone/><MdEmail/></p>
                        <p>Last updated on {this.state.last_updated}</p>
                    </td>
                </tr>
            </table>
        </div>
      );
    }

export default Profile;
