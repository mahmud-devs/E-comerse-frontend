import React from "react";
import Banner from "../../Components/HomeComponents/Banner/Index";
import FlashSale from "../../Components/HomeComponents/FlashSale/Index";
import Category from "../../Components/HomeComponents/Category/Index";
import BestSelling from "../../Components/HomeComponents/BestSelling/Index";
import Experience from "../../Components/HomeComponents/Experience/Index";
import ExploreProduct from "../../Components/HomeComponents/ExploreProduct/Index";
import NewArrival from "../../Components/HomeComponents/NewArrival/Index";
import CustomerService from "../../Components/HomeComponents/CustomerService/Index";
const HomePage = () => {
  return (
    <div>
      <Banner />
      <FlashSale />
      <Category />
      <BestSelling />
      <Experience />
      <ExploreProduct />
      <NewArrival />
      <CustomerService />
    </div>
  );
};

export default HomePage;
