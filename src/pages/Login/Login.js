import React, { useState } from "react";
import axios from "../../services/LoginAxios";
import { useNavigate, NavLink } from "react-router-dom";
import { useAuth } from "auth/AuthProvider";

function Login() {
  const [credentials, setCredentials] = useState([]);
  const [error, setError] = useState(null);
  const { signin } = useAuth();

  const history = useNavigate();
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };
  const handleLogin = async () => {
    try {
      const response = await axios.get("http://localhost:5000/userID");

      const user = response.data.find(
        (id) =>
          id.userName === credentials.userName &&
          id.password === credentials.password
      );

      if (user) {
        await signin(credentials.userName);
        const token = generateToken();

        localStorage.setItem("token", token);

        history("/");
      } else {
        setError("Invalid username or password");
      }
    } catch (error) {
      setError("An error occurred during login");
      console.log(error);
    }
  };
  const generateToken = () => {
    return Math.random().toString(36).substr(2) + Date.now().toString(36);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin();
  };
  return (
    <div>
      <div className="login-container">
        <h3>Log-in</h3>
        <form onSubmit={handleSubmit}>
          <p>
            <label>Username:</label>{" "}
            <input
              type="text"
              name={"userName"}
              value={credentials.userName}
              onChange={handleChange}
            />
          </p>
          <p>
            <label>Password:</label>{" "}
            <input
              type="password"
              name={"password"}
              value={credentials.password}
              onChange={handleChange}
            />
          </p>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit">Submit</button>
          <p>
            Need an account?
            <button>
              <NavLink to="../sign-up">Signup</NavLink>
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
