import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

import HomePage from "./pages/Home/Index";
import RootMainLayout from "./Components/RootLayout/RootMainLayout";
import ProductPage from "./pages/ProductPage/Index";
import ProductDetail from "./pages/ProductDetails/Index";
import Login from "./pages/Auth/Login/Login";
import WishList from "./pages/WishList/Index";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootMainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/product/item/me" element={<ProductPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/WishList" element={<WishList />} />
      </Route>
    </Route>,
  ),
);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
