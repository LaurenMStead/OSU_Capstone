import React, { useState } from 'react';

const NewPet = ({ isLoggedIn, setIsLoggedIn }) =>  {
  const type = ['Dog', 'Cat', 'Other'];
  const gender = ['Female', 'Male'];
  const disposition = ['Good with other animals', 'Good with children', 'Animal must be leashed at all times'];
  const age = ['Baby', 'Youth', 'Adult', 'Senior'];
  const [selectedType, setSelectedType] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('');
  const [selectedDisposition, setSelectedDisposition] = useState([]);
  const [selectedAge, setSelectedAge] = useState('');
  const [inputImage, setInputImage] = useState('');
  const [inputDescription, setInputDescription] = useState('');

  const getDropdownOptions = (optionName, optionList, stateSetter) => {

    const handleChange = () => {
      let options = [...document.getElementById(optionName).options];
      let selected = options.filter(option => option.selected)
      let values = selected.map(option => option.value);
      stateSetter(values);
    }

    // lists normal drop down for all other filtering options, besides breed
    return (
      <select className="NewPet_select" name={optionName} id={optionName} onChange={(e) => handleChange(e)} multiple={optionName === 'disposition'} required={optionName !== 'disposition'} >
        {optionList.map((option, i) => (
          <option id={option} className="NewPet_option" key={option} value={option} >{option}</option>
        ))}
      </select>
    )
  }

  const addPet = (event, petInfo) => {
    event.preventDefault();

    fetch('http://127.0.0.1:8000/api/pets', {
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
      <form id="NewPet">
        <fieldset className="NewPet_outerFieldset">
          <fieldset className="NewPet_innerFieldset">
          <legend>Fill out the form to add a new pet! *All sections are required</legend>
            <label className="NewPet_label" for="type">Type:</label>
            {getDropdownOptions('type', type, setSelectedType)}

            <label className="NewPet_label" for="breed">Breed:</label>
            <input className="NewPet_select" type="text" name="breed" onChange={(e) => setSelectedBreed(e.target.value)}></input>

            <label className="NewPet_label" for="gender">Gender:</label>
            {getDropdownOptions('gender', gender, setSelectedGender)}

            <label className="NewPet_label" for="disposition">Disposition:</label>
            {getDropdownOptions('disposition', disposition, setSelectedDisposition)}

            <label className="NewPet_label" for="age">Age:</label>
            {getDropdownOptions('age', age, setSelectedAge)}

            <label className="NewPet_label" for="image">Image Link:</label>
            <input className="NewPet_select" type="text" name="image" onChange={(e) => setInputImage(e.target.value)}></input>

            <label className="NewPet_label" for="description">Description:</label>
            <textarea className="NewPet_select" type="text" name="description" onChange={(e) => setInputDescription(e.target.value)}></textarea>

            <button className="NewPet_button" onClick={(event) => addPet(event, { type: selectedType, gender: selectedGender, breed: selectedBreed, disposition: selectedDisposition, age: selectedAge, image: inputImage, description: inputDescription })}>Submit</button>
            </fieldset>
          </fieldset>
        </form>
    );
}

export default NewPet;
