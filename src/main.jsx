import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Pages/Layout/Root";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Registration from "./Pages/Registration/Registration";
import ServicesDetails from "./Pages/ServicesDetails/ServicesDetails";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import Blogs from "./Pages/Blogs/Blogs";
import AboutPage from "./Pages/About/AboutPage";
import AuthProvider from "./context/AuthProvider";
import PrivateRoutes from "./routes/PrivateRoutes";
import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../data.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/services/:id",
        loader: () => fetch("../data.json"),
        element: (
          <PrivateRoutes>
            <ServicesDetails></ServicesDetails>
          </PrivateRoutes>
        ),
      },
      {
        path: "/blog",
        element: (
          <PrivateRoutes>
            <Blogs></Blogs>
          </PrivateRoutes>
        ),
      },
      {
        path: "/about",
        element: (
          <PrivateRoutes>
            <AboutPage></AboutPage>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
