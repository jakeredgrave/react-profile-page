const ProfilePicture = ({ img1, background }) => {
  return (
    <section className="profile-picture-and-background-box">
      <div className="background-picture-box">
        <img className="background-picture" src={background} alt="background" />
      </div>
      <div className="profile-picture-box">
        <img className="profile-picture" src={img1} alt="profile" />
      </div>
    </section>
  );
};
export default ProfilePicture;
