import ProfileCard from './ProfileCard.jsx';

const ProfileList = ({ pets }) => {
  return (
    <div>
      {pets.map((pet) => <ProfileCard pet={pet} />)}
    </div>
  );
}

export default ProfileList;
