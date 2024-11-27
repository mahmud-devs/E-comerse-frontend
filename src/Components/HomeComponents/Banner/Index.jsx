import React, { useState } from "react";
import { category } from "../../../../Data/data";
import { MdArrowForwardIos } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import BannerImg from "../../../assets/Banner/Banner.jpg";
const Banner = () => {
  const [currentSlide, setcurrentSlide] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul
          style={{ margin: "0px", display: "flex", justifyContent: "center" }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) =>
      i == currentSlide ? (
        <div
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            background: "#DB4444",
            border: "3px solid #ffff",
            marginRight: "12px",

            cursor: "pointer",
          }}
        ></div>
      ) : (
        <div
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            background: "#ffff",
            opacity: "0.5",
            marginRight: "12px",
            cursor: "pointer",
          }}
        ></div>
      ),
    afterChange: function (currentSlide) {
      setcurrentSlide(currentSlide);
    },
  };
  return (
    <div>
      <div className="container">
        <div className="flex items-start justify-between">
          {/* ========================================================= */}
          <div className="w-[20%] pt-10">
            <ul>
              {category?.map((item) => (
                <div className="flex cursor-pointer items-center justify-between rounded-s-md py-2 pe-11 text-textBlack_000000 transition-all hover:bg-[rgba(0,0,0,0.6)] hover:pl-6 hover:text-white_FAFAFA">
                  <li className="font-popins text-[16px] font-normal">
                    {item.category}
                  </li>
                  {item.subCategory && (
                    <span>
                      <MdArrowForwardIos />
                    </span>
                  )}
                </div>
              ))}
            </ul>
          </div>
          {/* ========================================================== */}
          <div className="w-[80%] border-s-[1.5px] border-[rgba(0,0,0,0.3)] ps-11 pt-10">
            <div className="slider-container">
              <Slider {...settings}>
                {[...new Array(10)].map((_, index) => (
                  <div key={index}>
                    <img
                      src={BannerImg}
                      alt={BannerImg}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
