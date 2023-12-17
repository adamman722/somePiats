import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/Landing/LandingPage";
import App from "./App";
import Home from "./pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <App />,
  },
]);
