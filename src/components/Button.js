const Button = ({ text, btnClass, event }) => {
  return (
    <button className={`btn ${btnClass}`} onClick={event}>
      {text}
    </button>
  );
};

export default Button;
