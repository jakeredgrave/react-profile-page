import Post from "./Post";

const Posts = ({ posts, profileInfo }) => {
  return (
    <div className="posts">
      {posts.map((post) => (
        <Post key={post.id} post={post} profileInfo={profileInfo} />
      ))}
    </div>
  );
};

export default Posts;
