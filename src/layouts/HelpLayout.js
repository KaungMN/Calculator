import { NavLink, Outlet } from "react-router-dom";
function HelpLayout() {
  return (
    <div className="help-layout">
      <h2>Website Help</h2>
      <p>Explore different sections using the navigation menu.</p>

      <nav>
        <NavLink to="faq">View the FAQ</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </nav>

      <Outlet />
    </div>
  );
}

export default HelpLayout;
