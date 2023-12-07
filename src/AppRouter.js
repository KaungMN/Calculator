import RootLayout from "layout/RootLayout";
import BlogDetail from "pages/Blog/BlogDetail";
import Home from "pages/Home";
import Login from "pages/Login/Login";
import Profile from "pages/Profile";
import Signup from "pages/Signup";
import NoMatch from "pages/NoMatch";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import BlogsLayout from "layout/BlogLayout";
import AddBlog from "pages/Blog/AddBlog";
import NotFound from "pages/Blog/NotFound";
import BlogList from "pages/Blog/BlogList";
import UpdateBlog from "pages/Blog/UpdateBlog";
import Bootstrap from "pages/Bootstrap";
import Project from "pages/Project";
import Link from "pages/Link";
import About from "pages/About";
import Blog from "pages/Blog/Blog";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="blog" element={<Blog />} errorElement={<NotFound />}>
          <Route path="add_blog" element={<AddBlog />} />
          <Route path=":id" element={<BlogDetail />} />
          <Route path="update_blog:id" element={<UpdateBlog />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="project" element={<Project />} />
        <Route path="link" element={<Link />} />
        <Route path="log-in" element={<Login />} />
        <Route path="sign-up" element={<Signup />} />
      </Route>
      <Route path="*" element={<NoMatch />} />
    </>
  )
);
