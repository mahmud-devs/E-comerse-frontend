import React, { useRef } from "react";
import Heading from "./Heading";
import ProductCard from "./ProductCard";
import Timer from "./Timer";
import Slider from "react-slick";
import ProductSkeleton from "../../Helpers/ProductSkeleton";
import { IoMdArrowBack } from "react-icons/io";
import { IoArrowForward } from "react-icons/io5";
import CategorySkeleton from "../../Helpers/CategorySkeleton";
const ProductCommonLayout = ({
  ProductCard = () => <ProductSkeleton />,
  timeStamp = false,
  timeofOffer = 0,
  isArrowsTrue = false,
  heading = "today's",
  description = "flash sale",
  partialItemShow = 5,
  componentData = [],
  isLoading = false,
  viewAllBtn = false,
  viewAllBtnName = "View All",
  rows = 1,
  categorySkeleton = false,
}) => {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: partialItemShow,
    slidesToScroll: 1,
    rows: rows,
    autoplay: false,
  };

  const next = () => {
    sliderRef.current.slickNext();
  };

  const prev = () => {
    sliderRef.current.slickPrev();
  };
  return (
    <div>
      <div className="mb-[40px] flex items-end justify-between">
        <div className="flex items-end gap-x-[87px]">
          <Heading title={heading} description={description} />

          {timeStamp && <Timer timeofOffer={timeofOffer} />}
        </div>

        {isArrowsTrue && (
          <div className="mt-5 flex items-center justify-end gap-x-4">
            <h1
              onClick={next}
              className="flex h-[46px] w-[46px] cursor-pointer items-center justify-center rounded-full bg-white_F5F5F5 transition hover:bg-black_363738 hover:text-white_FFFFFF"
            >
              <span className="text-xl">
                <IoMdArrowBack />
              </span>
            </h1>
            <h1
              onClick={prev}
              className="flex h-[46px] w-[46px] cursor-pointer items-center justify-center rounded-full bg-white_F5F5F5 transition hover:bg-black_363738 hover:text-white_FFFFFF"
            >
              <span className="text-xl">
                <IoArrowForward />
              </span>
            </h1>
          </div>
        )}

        {viewAllBtn && (
          <button className="me-4 rounded bg-red_DB4444 px-12 py-4 font-popins text-[16px] font-medium text-white_FAFAFA transition-all hover:opacity-70">
            {viewAllBtnName}
          </button>
        )}
      </div>

      {isLoading ? (
        <div className="slider-container mt-5">
          <Slider ref={sliderRef} {...settings}>
            {[...new Array(10)]?.map((_, index) => (
              <div key={index}>
                {categorySkeleton ? <CategorySkeleton />: <ProductSkeleton />  }
              </div>
            ))}
          </Slider>
        </div>
      ) : (
        <div className="slider-container mt-5">
          <Slider ref={sliderRef} {...settings}>
            {componentData?.map((item, index) => (
              <div key={item.key}>
                <ProductCard itemData={item ? item : {}} />
              </div>
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
};

export default ProductCommonLayout;
