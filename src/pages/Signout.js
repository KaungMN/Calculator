import React from "react";
import { useAuth } from "auth/AuthProvider";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Signout() {
  const { signout } = useAuth();
  const auth = useAuth();
  const isAuthenticated = auth.isAuthenticated;
  const history = useNavigate();

  const handleSignout = async () => {
    try {
      await signout();
      history("/log-in");
    } catch (error) {
      console.error("Error during signout:", error);
    }
  };

  return isAuthenticated ? (
    <button onClick={handleSignout}>Logout</button>
  ) : (
    <button>
      <NavLink to="log-in">Login</NavLink>
    </button>
  );
}

export default Signout;
