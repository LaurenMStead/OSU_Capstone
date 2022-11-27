import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

const EditPet = ({ selectedPet }) =>  {

  const type = ['Dog', 'Cat', 'Other'];
  const [breeds, setBreeds] = useState({});
  const [breedState, setBreedState] = useState(selectedPet.breed)
  const gender = ['Female', 'Male'];
  const age = ['Baby', 'Youth', 'Adult', 'Senior'];
  const availabilities = ['Available', 'Not Available', 'Pending', 'Adopted'];
  const dispositionChoices = ['Yes', 'No', 'Unknown'];
  const navigate = useNavigate();

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
        {optionList.map((option) => (
          <option id={option} className="EditPet_option" key={option} value={option} >{option}</option>
        ))}
      </select>
    )
  }

  const getPetInfo = async e => {

    e.preventDefault();

    const typeInput = document.getElementById("type");
    const breedInput = document.getElementById("breed");
    const gwcInput = document.getElementById("gwc");
    const gwoaInput = document.getElementById("gwoa");
    const mblInput = document.getElementById("mbl");
    const ageInput = document.getElementById("age");
    const genderInput = document.getElementById("gender");
    const availInput = document.getElementById("availability");

    console.log(selectedPet.name)

    const petData = {
      "name" : e.target.name.value,
      "type": typeInput.value,
      "breed": breedInput.value,
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

  const editPet = async (petInfo) => {

    await fetch(`http://127.0.0.1:8000/api/pets/${selectedPet.id}`, {
      method: 'PUT',
      body: JSON.stringify(petInfo)
    })
        .then((response) => response.json())
        .then((data) => {
          if(data['pet'] !== undefined)
          {
            alert('Successfully updated ' + data['pet']['name'] );
            navigate('/');
          }
        })
        .catch(err => console.log(err))
  }

  const deletePet = async () => {
    await fetch(`http://127.0.0.1:8000/api/pets/${selectedPet.id}`, { method: 'DELETE'})
        .then((response) => {
          response.json()
          if (response.status === 204){
            alert("Pet successfully deleted");
          }
        })
        .then((response) => {
          navigate('/');
        })
        .catch(err => console.log(err))
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getOptions = async () => {
    await fetch('http://127.0.0.1:8000/api/get-choices', {
      method: 'POST'
    })
        .then((response) => response.json())
        .then((data) => {
          setBreeds(data['breeds'])

        })
        .catch(err => console.log(err))
  }

  const handleDropDownChange = () => {
    let typeValue = document.getElementById("type").value;
    setBreedState(typeValue)
  }

  useEffect(() => {
    getOptions();
    handleDropDownChange();
  }, [])

    return (
      <form id="EditPet" onSubmit={getPetInfo}>
        <fieldset className="EditPet_outerFieldset">
          <fieldset className="EditPet_innerFieldset">
          <legend>Fill out the form to edit a pet!</legend>
            <label className="EditPet_label" htmlFor="name">Name:</label>
            <input className="EditPet_select" type="text" name="name" defaultValue={selectedPet.name}/>

            <label className="EditPet_label" htmlFor="type">Type:</label>
            <select className="NewPet_select" name='type' id='type' defaultValue={selectedPet.type} onChange={handleDropDownChange}>
              {type?.map((option) => (
                <option id={option} className="NewPet_option" key={option} value={option} >{option}</option>
              ))}
            </select>

            <label className="EditPet_label" htmlFor="breed">Breed:</label>
            <select className="NewPet_select" name='breed' id='breed' defaultValue={selectedPet.breed}>
            {breeds[breedState]?.map((option) => (
              <option id={option} className="NewPet_option" key={option} value={option} >{option}</option>
            ))}
          </select>
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

            <button className="EditPet_button" type={"submit"}>Submit</button>
            <button className="EditPet_button" onClick={deletePet}>Delete Pet</button>
            <button className="EditPet_button" onClick={() => navigate('/')}>Cancel</button>
            </fieldset>
          </fieldset>
        </form>
    );
}

export default EditPet;
