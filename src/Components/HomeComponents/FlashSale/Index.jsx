import React from "react";
import Heading from "../../CommonComponents/Heading";
import Timer from "../../CommonComponents/Timer";
import ProductCard from "../../CommonComponents/ProductCard";
import Slider from "react-slick";

const FlashSale = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "red",
          position: "absolute",
          left: "o",
          top: "0",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

  return (
    <div className="mb-[500px] mt-[140px]">
      <div className="container">
        <div className="flex items-end gap-x-[87px]">
          <Heading title={"Today’s"} description={"Flash Sales"} />
          <Timer />
        </div>
        <div className="slider-container mt-10">
          <Slider {...settings}>
            {[...new Array(10)].map((_, index) => (
              <ProductCard />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
