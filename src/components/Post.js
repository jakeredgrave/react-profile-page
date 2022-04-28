import Button from "./Button";
import MoreMenu from "./MoreMenu";
import { useState } from "react";

const Post = ({ post, profileInfo, onDelete }) => {
  const [showMoreMenu, setShowMoreMenu] = useState(false);

  return (
    <div className="post-box grid">
      <img src={profileInfo.profilePicture} alt="" />
      <div className="comment-author-and-text">
        <h4>
          {profileInfo.name} {profileInfo.lastName}
        </h4>
        <p>{post.text}</p>
      </div>
      <Button
        text="More"
        btnClass="more-button"
        event={() => setShowMoreMenu(!showMoreMenu)}
      />
      {showMoreMenu && <MoreMenu onDelete={onDelete} postId={post.id} />}
    </div>
  );
};
export default Post;
