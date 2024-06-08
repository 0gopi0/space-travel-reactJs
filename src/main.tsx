import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home.tsx";
import Destination from "./Destination.tsx";
import Crew from "./Crew.tsx";
import Technology from "./Technology.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "destination",
    element: <Destination />,
  },
  {
    path: "crew",
    element: <Crew />,
  },
  {
    path: "technology",
    element: <Technology />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
