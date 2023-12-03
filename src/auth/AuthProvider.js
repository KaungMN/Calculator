import React, { useState } from "react";

const AuthContext = React.createContext();

const useAuth = () => {
  return React.useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    username: null,
  });

  const signin = async (username) => {
    await new Promise((resolve) => setTimeout(resolve, 500));

    setAuthState({
      isAuthenticated: true,
      username: username,
    });
  };

  const signout = async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));

    setAuthState({
      isAuthenticated: false,
      username: null,
    });
  };

  const authProviderValue = {
    isAuthenticated: authState.isAuthenticated,
    username: authState.username,
    signin,
    signout,
  };

  return (
    <AuthContext.Provider value={authProviderValue}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
