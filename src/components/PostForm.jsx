import { useState } from "react";
import axios from "axios";

function PostForm({ users }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("https://your-backend.vercel.app/posts", { title, content, userId });
    setTitle("");
    setContent("");
    setUserId("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" required />
      <select value={userId} onChange={(e) => setUserId(e.target.value)} required>
        <option value="">Select User</option>
        {users.map((user) => (
          <option key={user._id} value={user._id}>{user.name}</option>
        ))}
      </select>
      <button type="submit">Add Post</button>
    </form>
  );
}

export default PostForm;
