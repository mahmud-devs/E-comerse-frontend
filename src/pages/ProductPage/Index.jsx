import React from "react";
import BreadCrum from "../../Components/CommonComponents/BreadCrum";
import ProductLeft from "../../Components/ProductPageComponents/ProductLeft";
import ProductRight from "../../Components/ProductPageComponents/ProductRight";
import { useGetCategoryQuery } from "../../Features/Api/ExcluciveApi";
const ProductPage = () => {
  const { data, isLodaing, error } = useGetCategoryQuery();

  return (
    <div>
      <div className="container">
        <BreadCrum />
        <div className="flex items-start justify-between">
          <ProductLeft
            categoryData={data?.data}
            isLoading={isLodaing}
            error={error}
          />
          <ProductRight />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
