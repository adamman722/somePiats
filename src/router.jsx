import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/Landing/LandingPage";
import App from "./App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);
