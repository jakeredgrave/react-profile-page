import { useState } from "react";
import Container from "./components/Container";
import Sidebar from "./components/Sidebar";
import EditForm from "./components/EditForm";
import AddTweet from "./components/AddTweet";
import Search from "./components/Search";
import img1 from "./Pictures/Phoenix_Wright.gif";
import background from "./Pictures/Jotaro.png";

function App() {
  const [profileInfo, setProfileInfo] = useState({
    profilePicture: img1,
    background: background,
    name: "Jake",
    lastName: "Redgrave",
    age: 21,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis massa id dictum porta. Vivamus non tellus tempus, condimentum ipsum id, eleifend tortor. Cras et sodales ligula. Vivamus ultrices rhoncus mauris. Proin nec consequat neque, a feugiat tortor. Pellentesque hendrerit neque vel hendrerit facilisis. Pellentesque fringilla nec nulla in viverra. Nunc justo massa, euismod eget gravida et, tincidunt sit amet dolor. Pellentesque dignissim vestibulum ante in gravida.",
    fromLocation: "Gotham City",
    currentLocation: "Central City",
  });
  const [posts, setPosts] = useState([
    {
      id: 1,
      text: "Example post text",
    },
    {
      id: 2,
      text: "Example post text",
    },
    {
      id: 3,
      text: "Example post text",
    },
    {
      id: 4,
      text: "Example post text",
    },
    {
      id: 5,
      text: "Example post text",
    },
    {
      id: 6,
      text: "Example post text",
    },
    {
      id: 7,
      text: "Example post text",
    },
  ]);
  const [showEditForm, setShowEditForm] = useState(false);
  const editInfo = (updatedInfo) => {
    // updatedInfo is an object
    setProfileInfo((profileInfo) => ({ ...profileInfo, ...updatedInfo }));
  };

  const [showAddTweet, setShowAddTweet] = useState(false);

  const addPost = (post) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newPost = { id, ...post };
    setPosts([...posts, newPost]);
    console.log(typeof posts);
  };

  const deleteTweet = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };
  return (
    <div className="App grid">
      <Sidebar onShow={() => setShowAddTweet(!showAddTweet)} />
      <Container
        posts={posts}
        profileInfo={profileInfo}
        onShow={() => setShowEditForm(!showEditForm)}
        onDelete={deleteTweet}
      />
      <Search />

      {/* Modals */}
      {showEditForm && (
        <EditForm
          profileInfo={profileInfo}
          setProfileInfo={setProfileInfo}
          editInfo={editInfo}
          onShow={() => setShowEditForm(!showEditForm)}
        />
      )}
      {showAddTweet && (
        <AddTweet
          onAdd={addPost}
          onShow={() => setShowAddTweet(!showAddTweet)}
        />
      )}
    </div>
  );
}

export default App;
