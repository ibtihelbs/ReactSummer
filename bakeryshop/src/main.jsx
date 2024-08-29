import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import "./index.css";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import Root from "./pages/Root.jsx";
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import SingleProduct from "./pages/SingleProduct.jsx";
import { store } from "./store/store.js";
import { Provider } from "react-redux";
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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
