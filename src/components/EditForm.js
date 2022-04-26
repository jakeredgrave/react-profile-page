import React, { useState } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
const EditForm = ({ profileInfo, editInfo, onShow }) => {
  const [name, setName] = useState(profileInfo.name);
  const [lastName, setLastName] = useState(profileInfo.lastName);
  const [age, setAge] = useState(profileInfo.age);
  const [fromLocation, setFromLocation] = useState(profileInfo.fromLocation);
  const [currentLocation, setCurrentLocation] = useState(
    profileInfo.currentLocation
  );
  const [aboutMe, setAboutMe] = useState(profileInfo.aboutMe);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      alert("Please enter your name");
    }
    if (!lastName) {
      alert("Please enter your last name");
    }
    editInfo({ name, lastName, age, fromLocation, currentLocation, aboutMe });
    onShow();
  };

  const portal = document.getElementById("portal");

  return ReactDOM.createPortal(
    <div className="modal-page-blur">
      <form className="edit-form card modal" onSubmit={onSubmit}>
        <div className="form-buttons">
          <Button text="X" btnClass="close-edit-button" event={onShow} />
          {/* <button className="btn close-edit-button" onClick={onShow}>
              X
            </button> */}
          <input className="btn submit-button" type="submit" value="Save" />
        </div>
        <div className="form-control">
          <div className="input-box">
            <p>Name</p>
            <input
              type="text"
              name="fname"
              id="fname-edit"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input-box">
            <p>Last Name</p>
            <input
              type="text"
              name="lname"
              id="lname-edit"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="input-box">
            <p>Age</p>
            <input
              type="number"
              name="age"
              id="age-edit"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          <div className="input-box">
            <p>From</p>
            <input
              type="text"
              name="from-location"
              id="from-location-edit"
              value={fromLocation}
              onChange={(e) => setFromLocation(e.target.value)}
            />
          </div>

          <div className="input-box">
            <p>Currently Living</p>
            <input
              type="text"
              name="current-location"
              id="current-location-edit"
              value={currentLocation}
              onChange={(e) => setCurrentLocation(e.target.value)}
            />
          </div>
          <div className="input-box">
            <p>Currently Living</p>
            <textarea
              placeholder="About Me"
              name="about-me"
              id="about-edit"
              maxLength={"160"}
              value={aboutMe}
              onChange={(e) => setAboutMe(e.target.event)}
            ></textarea>
          </div>
        </div>
      </form>
    </div>,
    portal
  );
};

export default EditForm;
