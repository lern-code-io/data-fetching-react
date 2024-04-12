import "./App.css";
import { useState } from "react";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 0,
      title: "Example Title",
      body: "Example Body",
    },
  ]);

  return (
    <>
      {posts.map((post) => (
        <div className="card" key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  );
}

export default App;
