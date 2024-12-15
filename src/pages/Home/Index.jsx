import React from "react";
import NavBar from "../../Components/RootLayout/NavBar/Index";
import Header from "../../Components/RootLayout/Header/Index";
import Banner from "../../Components/HomeComponents/Banner/Index";
import FlashSale from "../../Components/HomeComponents/FlashSale/Index";
import Category from "../../Components/HomeComponents/Category/Index";
import BestSelling from "../../Components/HomeComponents/BestSelling/Index";
import Experience from "../../Components/HomeComponents/Experience/Index";
import ExploreProduct from "../../Components/HomeComponents/ExploreProduct/Index";
const HomePage = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <Banner />
      <FlashSale />
      <Category/>
      <BestSelling/>
      <Experience/>
      <ExploreProduct/>
    </div>
  );
};

export default HomePage;
