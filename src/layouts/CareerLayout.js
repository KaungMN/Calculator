import { NavLink, Outlet } from "react-router-dom";

export default function CareersLayout() {
  return (
    <div className="careers-layout">
      <div className="careers-layout-header">
        <h1>Careers</h1>
        <nav>
          <NavLink to="add_career">Add New Career</NavLink>
        </nav>
      </div>

      <Outlet />
    </div>
  );
}
