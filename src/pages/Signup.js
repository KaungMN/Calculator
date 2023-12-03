import React, { useState } from "react";
import axios from "../services/LoginAxios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [inputs, setInput] = useState([]);
  const [userNameError, setUserNameError] = useState(false);
  const nagivate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const isUserNameAvailable = () => {
    const { userName } = inputs;
    if (userName) {
      axios
        .get(`http://localhost:5000/userID`)
        .then((response) => {
          const userName = response.data.find(
            (id) => id.userName === inputs.userName
          );

          if (userName) {
            setUserNameError("Username has already taken");
            alert("Username is already taken!");
          } else {
            setUserNameError(null);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    isUserNameAvailable();
    if (userNameError != null) {
      return;
    }

    //   .get("http://localhost:5000/userID")
    //   .then((response) => {
    //     const userName = response.data.map((id) => {
    //       return id.userName;
    //     });
    axios
      .post("http://localhost:5000/userId", inputs)
      .then(function (response) {
        alert("Sign-up success!");
        nagivate("/log-in");
      })
      .catch(function (error) {
        console.error(error.response.data);
        alert("Sign-up failed!");
      });
  };
  return (
    <div className="signup-container">
      <h3>Sign-up</h3>
      <form onSubmit={handleSubmit}>
        <p>
          <label>Username:</label>{" "}
          <input
            type="text"
            name={"userName"}
            value={inputs.userName}
            onChange={handleChange}
          />
        </p>
        <p>
          <label>Password:</label>{" "}
          <input
            type="password"
            name={"password"}
            value={inputs.password}
            onChange={handleChange}
          />
        </p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Signup;
