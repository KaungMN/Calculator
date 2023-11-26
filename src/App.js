import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "pages/Home";
import About from "pages/About";
import Faq from "pages/help/Faq";
import Contact from "pages/help/Contact";
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import Notfound from "./pages/Notfound";
import Careers, { careerLoader } from "./pages/careers/Careers";
import CareerDetails, {
  careerDetailsLoader,
} from "./pages/careers/CareerDetails";

import CareersLayout from "./layouts/CareerLayout";
import CareerError from "./pages/careers/CareerError";
import ProfileLayout from "./layouts/ProfileLayout";
import Profile from "./pages/Profile/Profile";
import Dashboard from "./pages/Profile/Dashboard";
import AddCareer from "./pages/careers/AddCareer";
import UpdateCareer from "./pages/careers/UpdateCareer";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route
        path="career"
        element={<CareersLayout />}
        errorElement={<CareerError />}
      >
        <Route index element={<Careers />} loader={careerLoader} />
        <Route
          path=":id"
          element={<CareerDetails />}
          loader={careerDetailsLoader}
        />
        <Route path="add_career" element={<AddCareer />} />
        <Route path="update_career" element={<UpdateCareer />} />
      </Route>
      <Route path="profile_layout" element={<ProfileLayout />}>
        <Route path="profile" element={<Profile />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
      <Route path="*" element={<Notfound />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
