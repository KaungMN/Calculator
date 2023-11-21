import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/help/Faq";
import Contact from "./pages/help/Contact";
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import Notfound from "./pages/Notfound";
import Careers, { careerLoader } from "./pages/careers/Careers";
import CareerDetails, {
  careerDetailsLoader,
} from "./pages/careers/CareerDetails";

import CareersLayout from "./layouts/CareerLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="career" element={<CareersLayout />}>
        <Route index element={<Careers />} loader={careerLoader} />
        <Route
          path=":id"
          element={<CareerDetails />}
          loader={careerDetailsLoader}
        />
      </Route>
      <Route path="*" element={<Notfound />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
