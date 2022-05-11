const Location = ({ fromLocation, currentLocation }) => {
  return (
    <div className="location">
      <div>
        <b>From: </b>
        {fromLocation}
      </div>
      <div>
        <b>Currently Living: </b> {currentLocation}
      </div>
    </div>
  );
};

export default Location;
