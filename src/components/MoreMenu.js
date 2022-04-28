import Button from "./Button";
import { useState } from "react";

const MoreMenu = ({ onDelete, postId }) => {
  return (
    <div className="more-menu card">
      <Button
        text="Delete"
        btnClass="delete-tweet-button"
        event={() => onDelete(postId)}
      />
    </div>
  );
};

export default MoreMenu;
