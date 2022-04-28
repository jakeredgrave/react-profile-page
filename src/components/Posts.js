import Post from "./Post";

const Posts = ({ posts, profileInfo, onDelete }) => {
  return (
    <div className="posts">
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          profileInfo={profileInfo}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default Posts;
