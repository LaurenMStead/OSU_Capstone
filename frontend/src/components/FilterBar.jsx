import React, { Component } from "react";
import { render } from "react-dom";

export default class FilterBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: ['dog', 'cat', 'others'],
      breed: {
        dog: ['a', 'b', 'c', 'd', 'e'],
        cat: ['a', 'b', 'c', 'd', 'e']
      },
      disposition: ['Good with other animals', 'Good with children', 'Animal must be leashed at all times'],
      age: ['Baby', 'Youth', 'Adult', 'Senior'],
      selectedOptions: {
        type: null,
        breed: null,
        disposition: null,
        age: null
      }
    }
  }

  getDropdownOptions(desc) {
    let optionList = this.state[desc];

    if (desc === 'breed') {
      return (
        <select onChange={onChange}>
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

    return (
      <select onChange={onChange}>
        <option disabled value={null}>
          Select an option
        </option>
        {optionList.map((option, i) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    )
  }

  render() {
    return (
      <div>
        <form>
        <label for="type">Type:</label>
        {getDropdownOptions('type')}
        <label for="breed">Breed:</label>
        {getDropdownOptions('breed')}
        <label for="disposition">Disposition:</label>
        {getDropdownOptions('disposition')}
        <label for="age">Age:</label>
        {getDropdownOptions('age')}
        <label for="available">Only show Available:</label>
        <input type="checkbox" id="available" name="available" value="available" />
        </form>
      </div>
    );
  }
}
