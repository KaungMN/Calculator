import { NavLink, Outlet } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";

function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <h1>KMN's Blog</h1>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="help">Help</NavLink>
          <NavLink to="career">Career</NavLink>
          <NavLink to="profile_layout">Profile</NavLink>
        </nav>
        <div>
          <Breadcrumbs />
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
