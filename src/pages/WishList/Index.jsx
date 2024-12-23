import React from "react";
import BreadCrum from "../../Components/CommonComponents/BreadCrum";
import Slider from "react-slick";
import { useGetAllProductQuery } from "../../Features/Api/ExcluciveApi";
import ProductSkeleton from "../../Helpers/ProductSkeleton";
import ProductCard from "../../Components/CommonComponents/ProductCard";
import Heading from "../../Components/CommonComponents/Heading";
const WishList = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplay: true,
  };

  const { data, isLoading, error } = useGetAllProductQuery();
  console.log(data?.data);

  return (
    <div className="mb-[140px] mt-[80px]">
      <div className="container">
        <BreadCrum />
        {/* ======================================== */}
        <div className="mb-[60px]">
          <div className="mb-[60px] flex items-center justify-between">
            <h3 className="font-popins text-[20px] font-medium text-textBlack_000000">
              Wishlist (4)
            </h3>
            <button className="rounded border-[1px] border-textBlack_000000 border-opacity-50 px-12 py-4 font-popins text-[16px] font-medium transition-all duration-200 hover:bg-red_DB4444 hover:text-white_FFFFFF">
              Move All To Bag
            </button>
          </div>
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
                  {data?.data?.map((item, index) => (
                    <div key={index}>
                      <ProductCard itemData={item ? item : {}} />
                    </div>
                  ))}
                </Slider>
              </div>
            )}
          </div>
        </div>
        {/* =============================================== */}
        <div>
          <div className="mb-[60px] flex items-center justify-between">
            <Heading title={"Just For You"} description={false}/>
            <button className="rounded border-[1px] border-textBlack_000000 border-opacity-50 px-12 py-4 font-popins text-[16px] font-medium transition-all duration-200 hover:bg-red_DB4444 hover:text-white_FFFFFF">
              Move All To Bag
            </button>
          </div>
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
                  {data?.data?.map((item, index) => (
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

export default WishList;
