import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import Home from "./routes/Home";
import About from "./routes/About"; 
import ProductListing from "./routes/ProductListing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "home/",
        element: <Home />,
      },
      {
        path: "about/",
        element: <About />,
      },
    ],
  },
   {
     path: "/product",
     element: <ProductListing />,
   },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);