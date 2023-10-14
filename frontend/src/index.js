import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/Root';
import Home from './routes/Home';
import Menu from './routes/Menu';
import About from './routes/About';
import ContactUs from './routes/ContactUs/ContactUs';
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
        path: "menu/",
        element: <Menu />,
      },
      {
        path: "about/",
        element: <About />,
      },
      {
        path: "contact/",
        element: <ContactUs />,
      },
    ],
  },
  // //add this if di mo ganahan ma apil ang navbar
  // {
  //   path: "/signin",
  //   element: <SignIn />,
  // },
  // {
  //   path: "/product",
  //   element: <ProductPage />,
  // },
  // like and subscribe for more advice
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
