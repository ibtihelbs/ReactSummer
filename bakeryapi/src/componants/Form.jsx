import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [form, setForm] = useState({
    title: "",
    views: "",
  });
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.views) {
      setError("All fields are required");
      return;
    }

    setError(null);
    setLoading(true);

    try {
      await axios.post("http://localhost:3000/posts", form);
      setMessage("Post added successfully!");
    } catch (error) {
      setError("Error adding post");
      console.log(error);
    }

    setLoading(false);
    setForm({
      title: "",
      views: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Post"
        value={form.title}
        onChange={handleChange}
        disabled={loading}
      />
      <input
        type="text"
        name="views"
        placeholder="View"
        value={form.views}
        onChange={handleChange}
        disabled={loading}
      />
      <button type="submit" disabled={loading}>
        {loading ? "Sending..." : "Send"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {message && <p style={{ color: "green" }}>{message}</p>}
    </form>
  );
};

export default Form;
