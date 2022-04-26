const NameAndAge = ({ name, lastName, age }) => {
  return (
    <>
      <div className="name-age-box">
        <h3>
          {name} {lastName}
        </h3>
        <p>Age: {age}</p>
      </div>
    </>
  );
};

export default NameAndAge;
