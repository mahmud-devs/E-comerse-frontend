import React from "react";
import NavBar from "../../Components/RootLayout/NavBar/Index";
import Header from "../../Components/RootLayout/Header/Index";
import Banner from "../../Components/HomeComponents/Banner/Index";
import FlashSale from "../../Components/HomeComponents/FlashSale/Index";
import Category from "../../Components/HomeComponents/Category";
const HomePage = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <Banner />
      <FlashSale />
      <Category/>
    </div>
  );
};

export default HomePage;
