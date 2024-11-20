import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

import HomePage from "./pages/Home/Index";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<HomePage />} />
    </Route>,
  ),
);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
