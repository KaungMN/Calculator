import RootLayout from "layout/RootLayout";
import NoMatch from "pages/NoMatch";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import NotFound from "pages/Blog/NotFound";
import Project from "pages/Project";
import Link from "pages/Link";
import About from "pages/About";
import Blog from "pages/Blog/Blog";
import BlogDetail from "pages/Blog/BlogDetail";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Blog />} errorElement={<NotFound />} />
        <Route path="blog-detail-1" element={<BlogDetail />} />
        <Route path="about" element={<About />} />
        <Route path="project" element={<Project />} />
        <Route path="link" element={<Link />} />
      </Route>
      <Route path="*" element={<NoMatch />} />
    </>
  )
);
