import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.scss";

// Route imports are now done in the router
import Home from "./pages";
import About from "./pages/about/page";
import Generator from "./pages/generator/page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path:"/qr",
    element: <Generator/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Navbar/> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);