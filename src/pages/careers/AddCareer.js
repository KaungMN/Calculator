import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddCareer() {
  const [input, setInput] = useState({});
  const navigate = useNavigate();
  const handleOnChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:4000/careers", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(input),
    })
      .then((res) => {
        alert("Saved successfully.");
        navigate("/career");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="add-career">
      <form onSubmit={handleSubmit}>
        <h2>Add your career</h2>
        <br />
        <label>Title :</label>
        <input
          name={"title"}
          type="text"
          value={input.title || ""}
          onChange={handleOnChange}
        />
        <br />
        <label>Salary :</label>
        <input
          name={"salary"}
          type="text"
          value={input.salary || ""}
          onChange={handleOnChange}
        />
        <br />
        <label>Location :</label>
        <input
          name={"location"}
          type="text"
          value={input.location || ""}
          onChange={handleOnChange}
        />
        <br />
        <label>Description :</label>
        <input
          name={"description"}
          type="text"
          value={input.description || ""}
          onChange={handleOnChange}
        />
        <br />
        <label>Requirements :</label>
        <input
          name={"requirements"}
          type="text"
          value={input.requirements || ""}
          onChange={handleOnChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
