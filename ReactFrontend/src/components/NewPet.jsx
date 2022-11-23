import React, {useContext, useEffect, useState} from 'react';
import AuthContext from "../context/AuthContext";

const NewPet = ({ selectedPet }) =>  {
  const type = ['Dog', 'Cat', 'Other'];
  const gender = ['Female', 'Male'];
  const age = ['Baby', 'Youth', 'Adult', 'Senior'];
  const availabilities = ['Available', 'Not Available', 'Pending', 'Adopted'];
  const dispositionChoices = ['Yes', 'No', 'Unknown'];
  const [selectedType, setSelectedType] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('');
  const [selectedDisposition, setSelectedDisposition] = useState([]);
  const [selectedAge, setSelectedAge] = useState('');
  const [inputImage, setInputImage] = useState('');
  const [selectedAvailability, setAvailability] = useState('');
  const auth = useContext(AuthContext);

  const getDropdownOptions = (optionName, optionList, stateSetter) => {

    const handleChange = () => {
      let options = [...document.getElementById(optionName).options];
      let selected = options.filter(option => option.selected)
      let values = selected.map(option => option.value);
      stateSetter(values);
    }

    // lists normal drop down for all other filtering options, besides breed
    return (
      <select className="NewPet_select" name={optionName} id={optionName} onChange={(e) => handleChange(e)} >
        {optionList.map((option, i) => (
          <option id={option} className="NewPet_option" key={option} value={option} >{option}</option>
        ))}
      </select>
    )
  }

  const getPetInfo = async e => {
    e.preventDefault();
    const typeInput = document.getElementById("type");
    //const breedInput = document.getElementById("breed");
    const gwcInput = document.getElementById("gwc");
    const gwoaInput = document.getElementById("gwoa");
    const mblInput = document.getElementById("mbl");
    const ageInput = document.getElementById("age");
    const genderInput = document.getElementById("gender");
    const availInput = document.getElementById("availability");
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
    console.log(petData);
    await addPet(petData);
  }

  const addPet = (event, petInfo) => {
    event.preventDefault();

    fetch('http://127.0.0.1:8000/api/pets/add-new-pet', {
      method: 'POST',
      body: JSON.stringify(petInfo)
    })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch(err => console.log(err))
  }

    return (
      <form id="NewPet" onSubmit={getPetInfo}>
        <fieldset className="NewPet_outerFieldset">
          <fieldset className="NewPet_innerFieldset">
          <legend>Fill out the form to add a new pet! *All sections are required</legend>
            <label className="NewPet_label" htmlFor="name">Name:</label>
            <input className="NewPet_select" type="text" name="name"></input>

            <label className="NewPet_label" htmlFor="type">Type:</label>
            {getDropdownOptions('type', type)}

            <label className="NewPet_label" htmlFor="breed">Breed:</label>
            {/*{getDropdownOptions('breed', breed, setSelectedBreed)}*/}
            <input className="NewPet_select" type="text" name="breed"></input>

            <label className="NewPet_label" htmlFor="gender">Gender:</label>
            {getDropdownOptions('gender', gender)}

            <label className="NewPet_label" htmlFor="age">Age:</label>
            {getDropdownOptions('age', age, setSelectedAge)}

            <label className="NewPet_label" htmlFor="availability">Availability:</label>
            {getDropdownOptions('availability', availabilities)}

            <label className="NewPet_label" htmlFor="dispositions">Disposition:</label>
            <label className="disposition_select" /> Good with Children {getDropdownOptions('gwc', dispositionChoices)}
            <label className="disposition_select" /> Good with other animals {getDropdownOptions('gwoa', dispositionChoices)}
            <label className="disposition_select" /> Must be leashed at all times {getDropdownOptions('mbl', dispositionChoices)}

            <label className="NewPet_label" htmlFor="description">Description:</label>
            <textarea className="NewPet_select" name="description"></textarea>

            <label className="NewPet_label" htmlFor="image">Image Link:</label>
            <input className="NewPet_select" type="text" name="image" ></input>

            <button className="NewPet_button">Submit</button>
            </fieldset>
          </fieldset>
        </form>
    );
}

export default NewPet;
