import React from "react";
import Header from "./Header/Index";
import NavBar from "./NavBar/Index";
import Footer from "./Footer/Index";
import { Outlet } from "react-router-dom";

const RootMainLayout = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootMainLayout;
