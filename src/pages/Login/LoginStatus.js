import React from "react";
import { useAuth } from "auth/AuthProvider";

const LoginStatus = () => {
  const auth = useAuth();

  return (
    <div className="login-status">
      {auth.isAuthenticated ? (
        <p>Welcome, {auth.username}!</p>
      ) : (
        <p>Please sign in!</p>
      )}
    </div>
  );
};

export default LoginStatus;
