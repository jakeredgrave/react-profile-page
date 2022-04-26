import ProfilePicture from "./ProfilePicture";
import NameAndAge from "./NameAndAge";
import AboutMe from "./AboutMe";
import Location from "./Location";
import Button from "./Button";
import PostsQuantity from "./PostsQuantity";

const Header = ({ profileInfo, onShow, posts }) => {
  return (
    <div className="header-box grid">
      <ProfilePicture
        img1={profileInfo.profilePicture}
        background={profileInfo.background}
      />
      <NameAndAge
        name={profileInfo.name}
        lastName={profileInfo.lastName}
        age={profileInfo.age}
      />
      <AboutMe about={profileInfo.about} />
      <Location
        fromLocation={profileInfo.fromLocation}
        currentLocation={profileInfo.currentLocation}
      />
      <Button text="Edit Profile" btnClass="edit-button" event={onShow} />
    </div>
  );
};

export default Header;
