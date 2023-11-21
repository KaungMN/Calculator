import { Outlet } from "react-router-dom";

export default function CareersLayout() {
  return (
    <div className="careers-layout">
      <h1>Careers</h1>
      <p>Hello there, are you searching for this job</p>

      <Outlet />
    </div>
  );
}
