import React, { useRef } from "react";
import Heading from "./Heading";
import ProductCard from "./ProductCard";
import Timer from "./Timer";
import Slider from "react-slick";
import ProductSkeleton from "../../Helpers/ProductSkeleton";
import { IoMdArrowBack } from "react-icons/io";
import { IoArrowForward } from "react-icons/io5";
const ProductCommonLayout = ({
  ProductCard = () => <ProductSkeleton />,
  timeStamp = false,
  timeofOffer = 0,
  isArrowsTrue = false,
  heading = "today's",
  description = "flash sale",
}) => {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,

    autoplay: true,
  };

  const next = () => {
    sliderRef.current.slickPrev();
  };

  const prev = () => {
    sliderRef.current.slickNext();
  };
  return (
    <div>
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

      <div className="slider-container mt-5">
        <Slider ref={sliderRef} {...settings}>
          {[...new Array(10)].map((_, index) => (
            <ProductCard />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductCommonLayout;
