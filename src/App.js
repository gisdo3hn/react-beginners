import { useEffect, useState } from "react";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/react-beginners",
    element: <Home />,
  },
  {
    path: "/movie/:id", //:id 에 id대신 다른걸 적어도 됨.
    element: <Detail />,
  },
]);

function App() {
  //router를 render함.
  return <RouterProvider router={router} />;
}

export default App;
