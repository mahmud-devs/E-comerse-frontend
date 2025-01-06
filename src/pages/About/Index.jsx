import React, { useState } from "react";
import BreadCrum from "../../Components/CommonComponents/BreadCrum";
import aboutImg from "../../assets/aboutImage.png";
import { CiShop } from "react-icons/ci";
import { LuCircleDollarSign } from "react-icons/lu";
import { FaShoppingBag } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import AboutCard from "../../Components/AboutComponent/AboutCard";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import CustomerService from "../../Components/HomeComponents/CustomerService/Index";
const About = () => {
  const [currentSlide, setcurrentSlide] = useState(0);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "-13%",
          left: "50%",
          transform: "translateX(-50%)",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul
          style={{ margin: "0px", display: "flex", justifyContent: "center" }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) =>
      i == currentSlide ? (
        <div
          style={{
            width: "15px",
            height: "15px",
            borderRadius: "50%",
            background: "#DB4444",
            border: "3px solid #000",
            marginRight: "12px",

            cursor: "pointer",
          }}
        ></div>
      ) : (
        <div
          style={{
            width: "15px",
            height: "15px",
            borderRadius: "50%",
            background: "#000",
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

  const reviewsObject = [
    {
      id: 1,
      title: "10.5k",
      summary: "Sallers active our site",
      icon: <CiShop />,
    },
    {
      id: 2,
      title: "33k",
      summary: "Mopnthly Produduct Sale",
      icon: <LuCircleDollarSign />,
    },
    {
      id: 3,
      title: "33k",
      summary: "Customer active in our site",
      icon: <FaShoppingBag />,
    },
    {
      id: 4,
      title: "23k",
      summary: "Anual gross sale in our site",
      icon: <FaSackDollar />,
    },
  ];
  return (
    <div>
      <div className="container">
        <BreadCrum />

        {/* ================== */}

        <div className="flex items-center justify-between">
          <div className="w-[40%]">
            <h1 className="text-text_black000000 mb-10 font-inter text-[54px] font-semibold">
              Our Story
            </h1>
            <p className="text-text_black000000 font-popins text-[16px] font-normal">
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
              <span className="mt-10">
                Exclusive has more than 1 Million products to offer, growing at
                a very fast. Exclusive offers a diverse assotment in categories
                ranging from consumer.
              </span>
            </p>
          </div>

          <div className="relative right-[-7.2%]">
            <img src={aboutImg} alt={aboutImg} />
          </div>
        </div>

        {/* ====================== */}

        <div className="my-[140px] flex items-center justify-between">
          {reviewsObject?.map((item) => (
            <div
              className="group flex items-center justify-center"
              key={item.id}
            >
              <div className="w-[270px] cursor-pointer rounded-md border p-6 text-center transition-all duration-300 group-hover:bg-red_DB4444">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-200 duration-300 group-hover:bg-gray-200">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-white duration-300">
                    <span className="text-[25px]">{item.icon}</span>
                  </div>
                </div>
                {/* Stats Text */}
                <h2 className="text-3xl font-bold text-gray-800 duration-300 group-hover:text-white_FFFFFF">
                  {item.title}
                </h2>
                <p className="mt-2 text-gray-600 duration-300 group-hover:text-white_FAFAFA">
                  {item.summary}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* =================================== */}

        <div className="slider-container mb-[180px]">
          <Slider {...settings}>
            {[...new Array(8)].map((_, index) => (
              <div key={index}>
                <AboutCard />
              </div>
            ))}
          </Slider>
        </div>

        {/* ============================== */}
        <CustomerService />
      </div>
    </div>
  );
};

export default About;
