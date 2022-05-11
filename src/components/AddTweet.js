import { useState } from "react";
import Button from "./Button";
import ReactDOM from "react-dom";
const AddTweet = ({ onAdd, onShow }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    onAdd({ text });

    setText("");
    onShow();
  };

  const portal = document.getElementById("portal");
  return ReactDOM.createPortal(
    <div className="modal-page-blur">
      <form className="add-tweet-form card modal grid" onSubmit={onSubmit}>
        <div className="close-new-tweet-button-box">
          <Button text="X" btnClass="close-new-tweet-button" event={onShow} />
        </div>

        <textarea
          placeholder="What's up?"
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <input
          className="tweet-new-tweet-button btn"
          type="submit"
          value="Tweet"
        />
      </form>
    </div>,
    portal
  );
};

export default AddTweet;
