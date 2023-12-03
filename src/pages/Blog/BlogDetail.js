import { useEffect, useState } from "react";
import axios from "services/LoginAxios";
import { useParams } from "react-router-dom";

function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/blogs/" + id);
      const data = response.data;
      setBlog(data);
    } catch (error) {
      console.error("Error fetching blog:", error);
    }
  };

  return (
    <div className="blog-detail">
      <h2>{blog.title}</h2>
      <p>Author: {blog.author}</p>
      <p>Date: {blog.publicationDate}</p>
      <div className="details">
        <p>{blog.content}</p>
      </div>
      <p>Categories: {blog.categories}</p>
    </div>
  );
}

export default BlogDetail;
