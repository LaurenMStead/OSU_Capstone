import { MdPhone, MdEmail } from 'react-icons/md';

function Profile( pets ) {
    return (
        <div>
            <br>
            <table>
                <tr>
                    <td>
                        <h2>{pets.name}</h2>
                        <p>Joined: {pets.dateCreated}</p>
                        <p>Age: {pets.age}</p>
                        <p>{pets.gender}</p>
                        <p>Breed: {pets.breed}</p>   
                        <p>Disposition: {pets.disposition}</p>
                        <p>Location: {pets.location}</p>
                        <p>Contact: <MdPhone/><MdEmail/></p>
                        <p>About Me: {pets.description}</p>
                    </td>
                    <td>
                        <img src={pets.pic} alt={pets.name}/>
                    </td>
                </tr>
            </table>
        </div>
      );
    }
    
    export default Profile;
