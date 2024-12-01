import React from "react";
import ProductCommonLayout from "../../CommonComponents/ProductCommonLayout";
import CategoryComponent from "../../CommonComponents/CategoryComponent";
const Category = () => {
  return (
    <div className="mb-[400px] mt-[150px]">
      <div className="container">
        <ProductCommonLayout
          ProductCard={CategoryComponent}
          timeStamp={false}
          timeofOffer={0}
          isArrowsTrue={true}
          heading="Categories"
          partialItemShow={6}
          description="Browse By Category"
        />
      </div>
    </div>
  );
};

export default Category;
