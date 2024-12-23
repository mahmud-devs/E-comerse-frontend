import React, { useState } from "react";
import BreadCrum from "../../Components/CommonComponents/BreadCrum";
import ProductLeft from "../../Components/ProductPageComponents/ProductLeft";
import ProductRight from "../../Components/ProductPageComponents/ProductRight";
import { useGetCategoryQuery } from "../../Features/Api/ExcluciveApi";
const ProductPage = () => {
  const { data, isLodaing, error } = useGetCategoryQuery();
  const [categoryId, setCategoryId] = useState("");
  const handleCategory = (id) => {
    setCategoryId(id);
  };
  return (
    <div>
      <div className="container">
        <BreadCrum />
        <div className="flex items-start justify-between">
          <ProductLeft
            categoryData={data?.data}
            isLoading={isLodaing}
            error={error}
            handleCategory={handleCategory}
          />
          <ProductRight categoryWiseData={categoryId} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
