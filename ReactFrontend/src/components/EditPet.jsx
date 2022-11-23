import React, {useContext, useEffect, useState} from 'react';
import AuthContext from "../context/AuthContext";

const EditPet = ({ selectedPet }) =>  {
  const type = ['Dog', 'Cat', 'Other'];
  const gender = ['Female', 'Male'];
  const age = ['Baby', 'Youth', 'Adult', 'Senior'];
  const availabilities = ['Available', 'Not Available', 'Pending', 'Adopted'];
  const dispositionChoices = ['Yes', 'No', 'Unknown'];
  const auth = useContext(AuthContext);

  const getDropdownOptions = (optionName, optionList ) => {

    if (optionName === 'gwc') {
      selectedPet[optionName] = selectedPet.good_with_children
    } else if (optionName === 'gwoa') {
      selectedPet[optionName] = selectedPet.good_with_other_animals
    } else if (optionName === 'mbl') {
      selectedPet[optionName] = selectedPet.must_be_leashed
    }

    return (
      <select className="EditPet_select" name={optionName} id={optionName} defaultValue={selectedPet[optionName]}>
        {optionList.map((option, i) => (
          <option id={option} className="EditPet_option" key={option} value={option} >{option}</option>
        ))}
      </select>
    )
  }

  const getPetInfo = async e => {
    e.preventDefault();
    const typeInput = document.getElementById("EditPet_type");
    //const breedInput = document.getElementById("breed");
    const gwcInput = document.getElementById("EditPet_gwc");
    const gwoaInput = document.getElementById("EditPet_gwoa");
    const mblInput = document.getElementById("EditPet_mbl");
    const ageInput = document.getElementById("EditPet_age");
    const genderInput = document.getElementById("EditPet_gender");
    const availInput = document.getElementById("EditPet_availability");
    const petData = {
      "name" : e.target.name.value,
      "type": typeInput.value,
      "breed": e.target.breed.value,
      "age" : ageInput.value,
      "gender": genderInput.value,
      "good_with_children": gwcInput.value,
      "good_with_other_animals": gwoaInput.value,
      "must_be_leashed": mblInput.value,
      "availability": availInput.value,
      "news_blurb": "",
      "description": e.target.description.value,
    }

    await editPet(petData);
  }

  const editPet = (event, petInfo) => {
    event.preventDefault();

    fetch(`http://127.0.0.1:8000/api/pets/${selectedPet.id}`, {
      method: 'PUT',
      body: JSON.stringify(petInfo)
    })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch(err => console.log(err))
  }

    return (
      <form id="EditPet" onSubmit={getPetInfo}>
        <fieldset className="EditPet_outerFieldset">
          <fieldset className="EditPet_innerFieldset">
          <legend>Fill out the form to edit a pet!</legend>
            <label className="EditPet_label" htmlFor="name">Name:</label>
            <input className="EditPet_select" type="text" name="name" defaultValue={selectedPet.name}/>

            <label className="EditPet_label" htmlFor="type">Type:</label>
            {getDropdownOptions('type', type)}

            <label className="EditPet_label" htmlFor="breed">Breed:</label>
            <input className="EditPet_select" type="text" name="breed" defaultValue={selectedPet.breed}></input>

            <label className="EditPet_label" htmlFor="gender">Gender:</label>
            {getDropdownOptions('gender', gender)}

            <label className="EditPet_label" htmlFor="age">Age:</label>
            {getDropdownOptions('age', age)}

            <label className="EditPet_label" htmlFor="availability">Availability:</label>
            {getDropdownOptions('availability', availabilities)}

            <label className="EditPet_label" htmlFor="dispositions">Disposition:</label>
            <label className="disposition_select" /> Good with Children {getDropdownOptions('gwc', dispositionChoices)}
            <label className="disposition_select" /> Good with other animals {getDropdownOptions('gwoa', dispositionChoices)}
            <label className="disposition_select" /> Must be leashed at all times {getDropdownOptions('mbl', dispositionChoices)}

            <label className="EditPet_label" htmlFor="description">Description:</label>
            <textarea className="EditPet_select" name="description" defaultValue={selectedPet.description}></textarea>

            <label className="EditPet_label" htmlFor="image">Image Link:</label>
            <input className="EditPet_select" type="text" name="image" defaultValue={selectedPet.image}></input>

            <button className="EditPet_button">Submit</button>
            </fieldset>
          </fieldset>
        </form>
    );
}

export default EditPet;
