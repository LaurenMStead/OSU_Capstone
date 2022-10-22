function ProfileCard (pets) {
  return (
    <div>
      <img src={pets.pic} alt={pets.name}></img>
      <h2>{pets.name}</h2>
      <p>Joined: {pets.dateCreated}   Age: {pets.age}   {pets.gender}</p>
    </div>
  );
}

export default ProfileCard;
