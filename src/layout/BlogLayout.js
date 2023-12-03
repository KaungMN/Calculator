import BlogList from "pages/Blog/BlogList";
import { NavLink, Outlet } from "react-router-dom";

export default function BlogsLayout() {
  return (
    <div className="blogs-layout">
      <div className="blogs-layout-header">
        <h1>Blogs</h1>
        <nav>
          <button>
            <NavLink to="add_blog" style={{ color: "white" }}>
              Add New Blog
            </NavLink>
          </button>
        </nav>
      </div>
      <Outlet />
      <BlogList />
    </div>
  );
}
