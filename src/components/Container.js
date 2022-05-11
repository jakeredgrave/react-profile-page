import Header from "./Header";
import Posts from "./Posts";
import PostsQuantity from "./PostsQuantity";

const Container = ({ profileInfo, posts, onShow, onDelete }) => {
  return (
    <div className="container grid">
      <PostsQuantity profileInfo={profileInfo} />
      <Header profileInfo={profileInfo} onShow={onShow} />
      <Posts posts={posts} profileInfo={profileInfo} onDelete={onDelete} />
    </div>
  );
};

export default Container;
