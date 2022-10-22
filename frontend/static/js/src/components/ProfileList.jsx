import ProfileCard from './ProfileCard.jsx';

const ProfileList = () => {
  return (
    <div>
      {this.props.profiles.map((profile) => <ProfileCard />)}
    </div>
  );
}

export default ProfileList;
