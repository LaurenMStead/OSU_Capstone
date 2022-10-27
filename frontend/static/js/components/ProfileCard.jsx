function ProfileCard ({ pet }) {
  return (
    <div>
      <img src={pet.pic} alt={pet.name}></img>
      <h2>{pet.name}</h2>
      <p>Joined: {pet.dateCreated}   Age: {pet.age} </p>
    </div>
  );
}

export default ProfileCard;
