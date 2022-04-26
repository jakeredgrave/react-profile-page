const Post = ({ post, profileInfo }) => {
  return (
    <div className="post-box grid">
      <img src={profileInfo.profilePicture} alt="" />
      <div className="comment-author-and-text">
        <h4>
          {profileInfo.name} {profileInfo.lastName}
        </h4>
        <p>{post.text}</p>
      </div>
    </div>
  );
};
export default Post;
