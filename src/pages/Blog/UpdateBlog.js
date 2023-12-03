import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "services/LoginAxios";
import { useAuth } from "auth/AuthProvider";

export default function UpdateBlog() {
  const auth = useAuth();
  const isAuthenticated = auth.isAuthenticated;
  const [input, setInput] = useState({});
  const navigate = useNavigate();
  const handleOnChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isAuthenticated === false) {
      alert("You cannot add the blog. Please Sign-in");
      return;
    }

    axios
      .put("http://localhost:4000/blogs/1", input)
      .then(function (response) {
        console.log(response);
        alert("Saved success!");
        navigate("/blog");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="add-blog">
      <form onSubmit={handleSubmit}>
        <h2 style={{ textAlign: "center" }}>Update your Blog</h2>
        <br />
        <label>Title :</label>
        <input
          name={"title"}
          type="text"
          value={input.title || ""}
          onChange={handleOnChange}
        />
        <br />
        <label>Content :</label>
        <input
          name={"content"}
          type="text"
          value={input.content || ""}
          onChange={handleOnChange}
        />
        <br />
        <label>Categories :</label>
        <input
          name={"categories"}
          type="text"
          value={input.categories || ""}
          onChange={handleOnChange}
        />
        <br />
        <label>Publication Date :</label>
        <input
          name={"publicationDate"}
          type="text"
          value={input.publicationDate || ""}
          onChange={handleOnChange}
        />
        <br />
        <label>Author :</label>
        <input
          name={"author"}
          type="text"
          value={input.author || ""}
          onChange={handleOnChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
