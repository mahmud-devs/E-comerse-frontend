import React from "react";
import BreadCrum from "../../Components/CommonComponents/BreadCrum";

import Slider from "react-slick";

import {
  useGetSingleProductQuery,
  useGetSingleCategoryQuery,
} from "../../Features/Api/ExcluciveApi";
import { useParams } from "react-router-dom";
import ImageGallery from "../../Components/ProductDetailComponents/ImageGallery";
import ProductItemInfo from "../../Components/ProductDetailComponents/ProductItemInfo";
import ProductCommonLayout from "../../Components/CommonComponents/ProductCommonLayout";
import ProductCard from "../../Components/CommonComponents/ProductCard";
import Heading from "../../Components/CommonComponents/Heading";
import CategorySkeleton from "../../Helpers/CategorySkeleton";
import ProductSkeleton from "../../Helpers/ProductSkeleton";
import ProductDetailSkeleton from "../../Helpers/ProductDetailSkeleton";
const ProductDetail = () => {
  const params = useParams();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplay: false,
  };

  // ================ get single product =================
  const { data, isLoading, error } = useGetSingleProductQuery(params?.id);
  // console.log(data?.data);

  //   ============ get single category from product ===============
  const categoryData = useGetSingleCategoryQuery(data?.data?.category?._id);
  // console.log("category", categoryData?.data?.data?.product);

  return (
    <div className="my-20">
      <div className="container">
        <BreadCrum />
        {/* ================================== */}
        {isLoading ? (
          <ProductDetailSkeleton />
        ) : (
          <div className="flex items-start">
            <div className="w-[60%]">
              <ImageGallery image={data?.data?.image} />
            </div>
            <div className="h-[400px] w-[40%] ps-[70px]">
              <ProductItemInfo itemData={data?.data} />
            </div>
          </div>
        )}

        {/* ================================ */}
        <div className="mb-[140px] mt-[140px]">
          <Heading title={"Related Item"} description={false} />
          <div>
            {isLoading ? (
              <div className="slider-container mt-5">
                <Slider {...settings}>
                  {[...new Array(10)]?.map((_, index) => (
                    <div key={index}>
                      <ProductSkeleton />
                    </div>
                  ))}
                </Slider>
              </div>
            ) : (
              <div className="slider-container mt-10">
                <Slider {...settings}>
                  {categoryData?.data?.data?.product?.map((item, index) => (
                    <div key={index}>
                      <ProductCard itemData={item ? item : {}} />
                    </div>
                  ))}
                </Slider>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
