import React from "react";
import ProductCommonLayout from "../../CommonComponents/ProductCommonLayout";
import ProductCard from "../../CommonComponents/ProductCard";
import { useGetAllProductQuery } from "../../../Features/Api/ExcluciveApi";
const ExploreProduct = () => {
  const { data, error, isLoading } = useGetAllProductQuery();
  //   console.log(data);

  return (
    <div className="mb-[168px]">
      <div className="container">
        <div>
          <ProductCommonLayout
            ProductCard={ProductCard}
            isArrowsTrue={true}
            heading={"Our Products"}
            partialItemShow={5}
            componentData={data?.data}
            description={"Explore Our Products"}
            isLoading={isLoading}
            rows={2}
          />
        </div>

        <div className="mt-1 flex justify-center">
          <button className="me-4 rounded bg-red_DB4444 px-12 py-4 font-popins text-[16px] font-medium text-white_FAFAFA transition-all hover:opacity-70">
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExploreProduct;
