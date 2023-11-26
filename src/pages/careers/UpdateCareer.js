import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UpdateCareer() {
  const [input, setInput] = useState({});
  const update = input;
  const navigate = useNavigate();
  const handleOnChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = (event) => {
    fetch("http://localhost:4000/careers/1", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(update),
    })
      .then((res) => {
        alert("Updated successfully.");
        navigate("/career");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="add-career">
      <form onSubmit={() => handleUpdate()}>
        <h2>Update your career</h2>
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

export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch("http://localhost:4000/careers/" + id);
  if (!res.ok) {
    throw Error("Could not find that career.");
  }
  return res.json();
};
