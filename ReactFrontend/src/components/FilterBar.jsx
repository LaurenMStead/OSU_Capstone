import React, { useState } from "react";

const FilterBar = ({ }) => {
  const [type, setType] = useState(['dog', 'cat', 'others']);
  const [breed, setBreed] = useState({
    dog: ['a', 'b', 'c', 'd', 'e'],
    cat: ['a', 'b', 'c', 'd', 'e']
  });
  const [disposition, setDisposition] = useState(['Good with other animals', 'Good with children', 'Animal must be leashed at all times']);
  const [age, setAge] = useState(['Baby', 'Youth', 'Adult', 'Senior']);
  const [selectedOptions, setSelectedOptions] = useState({
    type: null,
    breed: null,
    disposition: null,
    age: null
  });

  const getDropdownOptions = (desc) => {
    let optionList = desc;

    // uses optgroup if it's listing for breed
    if (desc.dog !== undefined) {
      return (
        <select multiple>
          <option disabled value={null}>
            Select an option
          </option>
          {Object.keys(optionList).map((key, ind) => (
            <optgroup label={key}>
              {optionList[key].map((option, i) => (
              <option key={option} value={option}>{option}</option>
              ))}
            </optgroup>
          ))}
        </select>
      )
    }

    // lists normal drop down for all other filtering options, besides breed
    return (
      <select >
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
      <form >
      <label for="type">Type:</label>
      {getDropdownOptions(type)}
      <label for="breed">Breed:</label>
      {getDropdownOptions(breed)}
      <label for="disposition">Disposition:</label>
      {getDropdownOptions(disposition)}
      <label for="age">Age:</label>
      {getDropdownOptions(age)}
      <input type="submit" value="Submit"/>
      </form>
    </div>
  );
}

export default FilterBar;
