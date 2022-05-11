import Button from "./Button";

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
