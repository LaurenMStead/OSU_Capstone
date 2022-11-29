import React, {useContext, useEffect, useState} from 'react';
import AuthContext from "../context/AuthContext";
import {useNavigate} from "react-router-dom";

const NewPet = () =>  {

  const [types, setTypes] = useState([]);
  const [genders, setGenders] = useState([]);
  const [breeds, setBreeds] = useState({});
  const [breedState, setBreedState] = useState('')
  const [dispositionChoices, setDispositionChoices] = useState([]);
  const [ages, setAges] = useState([]);
  const [availabilities, setAvailabilities] = useState([]);

  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getOptions = async () => {
    await fetch('http://127.0.0.1:8000/api/get-choices', {
      method: 'POST'
    })
        .then((response) => response.json())
        .then((data) => {
          setTypes(data['types'])
          setBreeds(data['breeds'])
          setAges(data['ages'])
          setGenders(data['genders'])
          setDispositionChoices(data['dispositions'])
          setAvailabilities(data['availabilities'])
        })
        .catch(err => console.log(err))
  }

  const setDropdownOptions = (optionName, optionList) => {
    return (
      <select className="NewPet_select" name={optionName} id={optionName} >
        {optionList?.map((option) => (
          <option id={option} className="NewPet_option" key={option} value={option} >{option}</option>
        ))}
      </select>
    )
  }

  const handleDropDownChange = () => {
    let typeValue = document.getElementById("type").value;
    setBreedState(typeValue)
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

    // form_data.append("name", e.target.name.value);
    // form_data.append("type", typeInput.value);
    // form_data.append("breed", breedInput.value);
    // form_data.append("age" , ageInput.value);
    // form_data.append("gender", genderInput.value);
    // form_data.append("good_with_children", gwcInput.value);
    // form_data.append("good_with_other_animals", gwoaInput.value);
    // form_data.append("must_be_leashed", mblInput.value);
    // form_data.append("availability", availInput.value);
    // form_data.append("news_blurb", "");
    // form_data.append("description", e.target.description.value);

    // if (e.target.files[0]){
    //   form_data.append("image", e.target.files[0], e.target.files[0].name);
    // }
    // else{
    //   form_data.append("image", "", "default");
    // }

    //console.log(form_data)
    const pet_data = {
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
      // "image": "",
    }

    await addPet(pet_data);
  }

  const addPet = async (petInfo) => {
    await fetch('http://127.0.0.1:8000/api/pets/add-new-pet', {
        method: 'POST',
        body: JSON.stringify(petInfo)
      })
        .then((response) => response.json() )
        .then((data) => {
          if (data['new_pet'] !== undefined){
            alert("New pet, " + data['new_pet']['name'] + ", added successfully!");
            navigate('/');
          }
          else{
            alert("Error adding pet - try again later");
          }

      })
        .catch(err => console.log(err))
  }

  useEffect(() =>{
    // checks if the user is an admin and can be viewing this page
    if(!auth.isAdmin){
      navigate("/404");
    }
    // fetches data until all required data is fetched
      getOptions();

  }, [auth, navigate])

  return (
    <form id="NewPet" onSubmit={getPetInfo}>
      <fieldset className="NewPet_outerFieldset">
        <fieldset className="NewPet_innerFieldset">
        <legend>Fill out the form to add a new pet! *All sections are required</legend>

          <label className="NewPet_label" htmlFor="name">Name:</label>
          <input className="NewPet_select" type="text" name="name"></input>

          <label className="NewPet_label" htmlFor="type">Type:</label>
          <select className="NewPet_select" name='type' id='type' defaultValue='Select an animal type...' onChange={handleDropDownChange}>
            <option className="NewPet_option" disabled="disabled"> Select an animal type...</option>
            {types?.map((option) => (
              <option id={option} className="NewPet_option" key={option} value={option} >{option}</option>
            ))}
          </select>

          <label className="NewPet_label" htmlFor="breed">Breed:</label>
          <select className="NewPet_select" name='breed' id='breed'>
            {breeds[breedState]?.map((option) => (
              <option id={option} className="NewPet_option" key={option} value={option} >{option}</option>
            ))}
          </select>

          <label className="NewPet_label" htmlFor="gender">Gender:</label>
          {setDropdownOptions('gender', genders)}

          <label className="NewPet_label" htmlFor="age">Age:</label>
          {setDropdownOptions('age', ages)}

          <label className="NewPet_label" htmlFor="availability">Availability:</label>
          {setDropdownOptions('availability', availabilities)}

          <label className="NewPet_label" htmlFor="disposition">Disposition:</label>
          <label className="disposition_select" /> Good with Children {setDropdownOptions('gwc', dispositionChoices)}
          <label className="disposition_select" /> Good with other animals {setDropdownOptions('gwoa', dispositionChoices)}
          <label className="disposition_select" /> Must be leashed at all times {setDropdownOptions('mbl', dispositionChoices)}

          <label className="NewPet_label" htmlFor="description">Description:</label>
          <textarea className="NewPet_select" name="description"></textarea>

          <label className="NewPet_label" htmlFor="image">Select Pet Image(s):</label>
          <input className="NewPet_select" type="file" name="images" accept="image/*"/>
          {/* multiple onChange={handleFileChange}*/}
          {/*<ul>*/}
          {/*  {files.map((file, i) => (*/}
          {/*    <li key={i}>*/}
          {/*      {file.name} - {file.type}*/}
          {/*    </li>*/}
          {/*  ))}*/}
          {/*</ul>*/}

          <button className="NewPet_button">Submit</button>
          </fieldset>
        </fieldset>
      </form>
  )
}

export default NewPet;
