import React, { useState } from "react";

const FilterBar = ({ filterPets }) => {
  const [type, setType] = useState(['dog', 'cat', 'others']);
  const [breed, setBreed] = useState({
    dog: ['doga', 'dogb', 'dogc', 'dogd', 'doge'],
    cat: ['cata', 'catb', 'catc', 'catd', 'cate'],
    other: ['a', 'b', 'c', 'd', 'e']
  });
  const [disposition, setDisposition] = useState(['Good with other animals', 'Good with children', 'Animal must be leashed at all times']);
  const [age, setAge] = useState(['Baby', 'Youth', 'Adult', 'Senior']);
  const [selectedType, setSelectedType] = useState('');
  const [selectedBreed, setSelectedBreed] = useState([]);
  const [selectedDisposition, setSelectedDisposition] = useState([]);
  const [selectedAge, setSelectedAge] = useState([]);

  const getFilterBar = () => {
    if (selectedType.length === 0) {
      return (
        <>
          <p>Type:</p>
          <button onClick={() => setSelectedType('dog')} >Dog</button>
          <button onClick={() => setSelectedType('cat')} >Cat</button>
          <button onClick={() => setSelectedType('other')} >Other</button>
        </>
      )
    } else {
      return (
        <form >
          <label for="breed">Breed:</label>
          {getDropdownOptions('breed', breed[selectedType], setSelectedBreed)}
          <label for="disposition">Disposition:</label>
          {getDropdownOptions('disposition', disposition, setSelectedDisposition)}
          <label for="age">Age:</label>
          {getDropdownOptions('age', age, setSelectedAge)}
          <input type="submit" value="Submit" onClick={() => filterPets({ type: selectedType, breed: selectedBreed, disposition: selectedDisposition, age: selectedAge })}/>
        </form>
      )
    }
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
      <select name={optionName} id={optionName} onChange={(e) => handleChange(e)} multiple>
        <option disabled value={null}>
          Select an option
        </option>
        {optionList.map((option, i) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    )
  }

  return (
    <div>
      {getFilterBar()}
    </div>
  );
}

export default FilterBar;
