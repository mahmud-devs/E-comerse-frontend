import React from "react";
import BreadCrum from "../../Components/CommonComponents/BreadCrum";

import {
  useGetSingleProductQuery,
  useGetSingleCategoryQuery,
} from "../../Features/Api/ExcluciveApi";
import { useParams } from "react-router-dom";
const ProductDetail = () => {
  const params = useParams();
  // ================ get single product =================
  const { data, isLoading, error } = useGetSingleProductQuery(params?.id);
  //   console.log(data?.data);

  //   ============ get single category ===============
  const categoryData = useGetSingleCategoryQuery(data?.data?.category?._id);
  console.log("category", categoryData?.data?.data?.product);

  return (
    <div className="my-20">
      <div className="container">
        <BreadCrum />
      </div>
    </div>
  );
};

export default ProductDetail;
