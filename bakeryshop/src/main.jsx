import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import "./index.css";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import Root from "./pages/Root.jsx";
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import SingleProduct from "./pages/SingleProduct.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "Shop",
        element: <Shop />,
      },
      {
        path: "single/:id",
        element: <SingleProduct />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
