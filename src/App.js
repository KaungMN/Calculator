import React from "react";
import { router } from "AppRouter";
import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "auth/AuthProvider";

function App() {
  return (
    <div>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  );
}

export default App;
