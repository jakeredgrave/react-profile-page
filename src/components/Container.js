import Header from "./Header";
import Posts from "./Posts";
import PostsQuantity from "./PostsQuantity";

const Container = ({ profileInfo, posts, onShow }) => {
  return (
    <div className="container grid">
      {/* <PostsQuantity profileInfo={profileInfo} /> */}
      <PostsQuantity profileInfo={profileInfo} posts={posts} />
      <Header profileInfo={profileInfo} onShow={onShow} />
      <Posts posts={posts} profileInfo={profileInfo} />
      {/* <WebPages webPages={profileInfo.webPages} /> */}
    </div>
  );
};

export default Container;
