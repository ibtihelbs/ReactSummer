import axios from "axios";
import "./App.css";
import { useState, useEffect } from "react";
import Form from "./componants/Form";

function App() {
  const [posts, setPosts] = useState([]);

  const displayPosts = async () => {
    try {
      const res = await axios.get("http://localhost:3000/posts");
      setPosts(res.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const addPost = async (newPost) => {
    try {
      await axios.post("http://localhost:3000/posts", newPost);
      displayPosts(); // Refresh the posts after adding a new one
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };

  const deletePost = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/posts/${id}`);
      displayPosts(); // Refresh the posts after deleting one
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  useEffect(() => {
    displayPosts();
  }, []);

  return (
    <div>
      <h1>Hello</h1>
      <Form onAddPost={addPost} />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <span>{post.title}</span>
            <button onClick={() => deletePost(post.id)}> x </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
