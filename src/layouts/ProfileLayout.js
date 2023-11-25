import { NavLink, Outlet } from "react-router-dom";

export default function ProfileLayout() {
  return (
    <div className="profile-layout">
      <h2>Profile</h2>
      <p>Welcome to my Profile Page.</p>

      <nav>
        <NavLink to="profile">Profile</NavLink>
        <NavLink to="dashboard">Dashboard</NavLink>
      </nav>

      <Outlet />
    </div>
  );
}
