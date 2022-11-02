import React from 'react';
import ProfileCard from './ProfileCard.jsx';
// import axios from 'axios';

const Browse = ({ selectPet }) => {

  //TO-DO: create HTTP request with axios. GET 1 pet.

  return (
    <div>
      <h1>This is the Browse page</h1>
      {/*<ProfileCard selectPet={selectPet} />*/}
    </div>
  );
}

export default Browse;
//
// import React, { Component } from "react";
//
//
// export default class CreateRoomPage extends Component {
//   constructor(props) {
//     super(props);
//   }
//
//   render() {
//     return(
//         <p>This is the BROWSE page</p>
//     );
//   }
// }
