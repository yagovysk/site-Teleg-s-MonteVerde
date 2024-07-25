import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "./App";
import { Privacidade } from "./Privacidade";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/privacidade",
    element: <Privacidade />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
