import React, { useState } from "react";

const FilterBar = ({ filterPets, resetPets }) => {
  const [type, setType] = useState(['dog', 'cat', 'others']);
  const [breed, setBreed] = useState({
    dog: ['doga', 'dogb', 'dogc', 'dogd', 'doge'],
    cat: ['cata', 'catb', 'catc', 'catd', 'cate'],
    other: ['a', 'b', 'c', 'd', 'e']
  });
  const [disposition, setDisposition] = useState(['Good with other animals', 'Good with children', 'Animal must be leashed at all times']);
  const [age, setAge] = useState(['Baby', 'Youth', 'Adult', 'Senior']);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedBreed, setSelectedBreed] = useState([]);
  const [selectedDisposition, setSelectedDisposition] = useState([]);
  const [selectedAge, setSelectedAge] = useState([]);


  const clickReset = (event) => {
    event.preventDefault();
    setSelectedType(null);
    setSelectedBreed([]);
    setSelectedDisposition([]);
    setSelectedAge([]);
    resetPets();
  }

  const clickType = (event, input) => {
    setSelectedType(input);
    filterPets(event, { type: input, breed: selectedBreed, disposition: selectedDisposition, age: selectedAge })
  }

  const getDropdownOptions = (optionName, optionList, stateSetter) => {

    const handleChange = (e) => {
      let options = [...document.getElementById(optionName).options];
      let selected = options.filter(option => option.selected)
      let values = selected.map(option => option.value);
      stateSetter(values);
    }

    // lists normal drop down for all other filtering options, besides breed
    return (
      <select className="filterBar_select" name={optionName} id={optionName} onChange={(e) => handleChange(e)} multiple>
        <option className="filterBar_option" disabled value={null}>
          Select an option
        </option>
        {optionList.map((option, i) => (
          <option className="filterBar_option" key={option} value={option}>{option}</option>
        ))}
      </select>
    )
  }

  const getFilterBar = () => {
    if (!selectedType) {
      return (
        <form id="filterType">
          <p>Type:</p>
          <button onClick={(event) => clickType(event, 'dog')} >Dog</button>
          <button onClick={(event) => clickType(event, 'cat')} >Cat</button>
          <button onClick={(event) => clickType(event, 'other')} >Other</button>
        </form>
      )
    } else {
      return (
        <form id="filterBar">
          <label className="filterBar_label" for="breed">Breed:</label>
          {getDropdownOptions('breed', breed[selectedType], setSelectedBreed)}
          <label className="filterBar_label" for="disposition">Disposition:</label>
          {getDropdownOptions('disposition', disposition, setSelectedDisposition)}
          <label className="filterBar_label" for="age">Age:</label>
          {getDropdownOptions('age', age, setSelectedAge)}
          <input className="filterBar_submit" type="submit" value="Submit" onClick={(event) => filterPets(event, { type: selectedType, breed: selectedBreed, disposition: selectedDisposition, age: selectedAge })}/>
          <input className="filterBar_reset" type="submit" value="Reset" onClick={(event) => clickReset(event)}/>
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
