import { useEffect, useState } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import axios from "services/LoginAxios";
import { useAuth } from "auth/AuthProvider";
function BlogList() {
  const auth = useAuth();
  const isAuthenticated = auth.isAuthenticated;
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetchdata();
  }, []);
  const fetchdata = async () => {
    try {
      const response = axios.get("http://localhost:4000/blogs");
      const data = (await response).data;
      setBlogs(data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  console.log(blogs);
  const nagivate = useNavigate();
  const handleDelete = async (id) => {
    try {
      if (isAuthenticated === false) {
        alert("You cannot delete the blog. Please Sign-in");
        return;
      }
      await axios.delete(`http://localhost:4000/blogs/${id}`, {
        headers: { "Content-Type": "application/json" },
      });
      alert("Deleted successfully.");
      fetchdata();
      //   nagivate("/");
    } catch (error) {
      console.error("Error deleting blog:", error.message);
    }
  };

  return (
    <div className="blogs">
      {blogs.map((blog) => (
        <div className="blogs-wrapper" key={blog.id}>
          <div>
            <NavLink to={blog.id.toString()}>
              <p>{blog.title}</p>
            </NavLink>
            <p>Author: {blog.author}</p>
          </div>

          <div>
            <NavLink to="update_blog:id">
              <button className="blog-root-input">Update</button>
            </NavLink>
            <button
              className="blog-root-input"
              onClick={() => handleDelete(blog.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
