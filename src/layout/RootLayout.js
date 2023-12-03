import Signout from "pages/Signout";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import LoginStatus from "pages/Login/LoginStatus";

function RootLayout() {
  return (
    <div>
      <h1 style={{ textAlign: "center", fontSize: "40px" }}>KMN's Blog</h1>
      <header>
        <div className="nav-container">
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="blog">Blog</NavLink>
            <NavLink to="profile">Profile</NavLink>
            <Signout />
          </nav>
          <LoginStatus />
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
