const PostsQuantity = ({ profileInfo, posts }) => {
  return (
    <div className="posts-quantity-box">
      <h3>
        {profileInfo.name} {profileInfo.lastName}
      </h3>
      <p>Number of posts: {posts.length}</p>
    </div>
  );
};

export default PostsQuantity;
