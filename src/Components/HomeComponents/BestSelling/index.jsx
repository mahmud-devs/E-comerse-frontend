import React from "react";
import ProductCommonLayout from "../../CommonComponents/ProductCommonLayout";
import ProductCard from "../../CommonComponents/ProductCard";

import { useGetBestSellingQuery } from "../../../Features/Api/ExcluciveApi";

const BestSelling = () => {
  const { data, error, isLoading } = useGetBestSellingQuery();

  const allBestSelling = data?.data?.map((item) => {
    return item?.product;
  });

  return (
    <div className="mb-[80px]">
      <div className="container">
        <ProductCommonLayout
          ProductCard={ProductCard}
          viewAllBtn={true}
          viewAllBtnName={"View All"}
          heading={"This Month"}
          partialItemShow={5}
          componentData={allBestSelling}
          description={"Best Selling Products"}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default BestSelling;
