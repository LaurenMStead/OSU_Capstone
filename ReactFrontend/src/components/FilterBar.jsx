import React, { useState } from "react";

const FilterBar = ({ filterPets, resetPets, dogBreeds, catBreeds, otherBreeds }) => {
  const gender = ['Female', 'Male'];
  const breed = {
    dog: dogBreeds,
    cat: catBreeds,
    other: otherBreeds
  };
  const disposition = ['Good with other animals', 'Good with children', 'Animal must be leashed at all times'];
  const dispoChoice = ['Yes', 'No', 'Unknown'];
  const age = ['Baby', 'Youth', 'Adult', 'Senior'];
  const availability = ['Available', 'Pending'];
  const [selectedType, setSelectedType] = useState(null);
  const [selectedGender, setSelectedGender] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState([]);
  const [selectedDisposition, setSelectedDisposition] = useState([]);
  const [selectedAge, setSelectedAge] = useState([]);
  const [selectedAvailability, setSelectedAvailability] = useState([]);

  const clickReset = (event) => {
    event.preventDefault();
    setSelectedType(null);
    setSelectedBreed([]);
    setSelectedDisposition([]);
    setSelectedAge([]);
    setSelectedAvailability([]);
    resetPets();
  }

  const clickType = (event, input) => {
    setSelectedType(input.toLowerCase());
    filterPets(event, { type: input, breed: selectedBreed, disposition: selectedDisposition, age: selectedAge, gender: selectedGender, availability: selectedAvailability })
  }

  const getDropdownOptions = (optionName, optionList, stateSetter) => {

    const handleChange = () => {
      let options = [...document.getElementById(optionName).options];
      let selected = options.filter(option => option.selected)
      let values = selected.map(option => option.value);
      stateSetter(values);
    }

    // lists normal drop down for all other filtering options, besides breed
    return (
      <select className="FilterBar_select" name={optionName} id={optionName} onChange={(e) => handleChange(e)} multiple>
        {optionList.map((option, i) => (
          <option id={option} className="FilterBar_option" key={option} value={option} >{option}</option>
        ))}
      </select>
    )
  }

  const getFilterBar = () => {
    if (!selectedType) {
      return (
        <form className="FilterBar">
          <fieldset className="FilterBar_fieldset">
            <legend>Filter by Type in order to see more filtering options</legend>
            <button className="FilterBar_button" onClick={(event) => clickType(event, 'dog')} >Dog</button>
            <button className="FilterBar_button" onClick={(event) => clickType(event, 'cat')} >Cat</button>
            <button className="FilterBar_button" onClick={(event) => clickType(event, 'other')} >Other</button>
          </fieldset>
        </form>
      )
    } else {
      return (
        <form className="FilterBar">
          <fieldset className="FilterBar_fieldset">
          <legend>You may select multiple of each category.</legend>
            <label className="FilterBar_label" for="breed">Breed:</label>
            {getDropdownOptions('breed', breed[selectedType], setSelectedBreed)}

            <label className="FilterBar_label" for="gender">Gender:</label>
            {getDropdownOptions('gender', gender, setSelectedGender)}

            <label className="FilterBar_label" for="disposition">Disposition:</label>
            {getDropdownOptions('disposition', disposition, setSelectedDisposition)}

            <label className="FilterBar_label" for="age">Age:</label>
            {getDropdownOptions('age', age, setSelectedAge)}

            <label className="FilterBar_label" for="availability">Availability:</label>
            {getDropdownOptions('availability', availability, setSelectedAvailability)}

            <button className="FilterBar_button" onClick={(event) => filterPets(event, { type: selectedType, breed: selectedBreed, disposition: selectedDisposition, age: selectedAge, gender: selectedGender, availability: selectedAvailability })}>Submit</button>

            <button className="FilterBar_button" onClick={(event) => clickReset(event)}>Reset</button>
          </fieldset>
        </form>
      )
    }
  }

  return (
    <div id="FilterBar">
      {getFilterBar()}
    </div>
  );
}

export default FilterBar;
