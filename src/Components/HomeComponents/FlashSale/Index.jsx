import React from "react";
import ProductCard from "../../CommonComponents/ProductCard";

import ProductCommonLayout from "../../CommonComponents/ProductCommonLayout";
import ProductSkeleton from "../../../Helpers/ProductSkeleton";

const FlashSale = () => {
  return (
    <div className="mb-[500px] mt-[140px]">
      <div className="container">
        <div>
          <ProductCommonLayout
            ProductCard={ProductCard}
            timeStamp={true}
            timeofOffer={3}
            isArrowsTrue={true}
            heading="Today's"
            description="Flash Sales"
          />
        </div>

        <div className="mt-16 flex justify-center border-b-[1.5px] border-[rgba(0,0,0,0.3)] ">
          <button className="rounded hover:opacity-70 transition-all bg-red_DB4444 px-12 py-4 font-popins text-[16px] mb-16 me-4 font-medium text-white_FAFAFA">
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
