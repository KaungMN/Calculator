import React from "react";
import { router } from "AppRouter";
import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "auth/AuthProvider";
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./index.css";

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
