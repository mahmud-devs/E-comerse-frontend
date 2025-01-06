import React from "react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import aboutCardImg from "../../assets/AboutCard.png";
const AboutCard = () => {
  return (
    <div className="w-[370px] rounded-lg bg-white">
      <div className="flex h-[430px] w-full items-center justify-center bg-gray-100 px-5 pt-5">
        <img
          src={aboutCardImg}
          alt={aboutCardImg}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="mt-8 text-start">
        <h2 className="mb-2 text-2xl font-semibold text-gray-800">
          Will Smith
        </h2>
        <p className="mb-4 text-gray-600">Product Designer</p>

        <div className="flex justify-start gap-x-4 text-gray-500">
          <span className="cursor-pointer transition-colors duration-300 hover:text-blue-500">
            <FaTwitter size={24} />
          </span>
          <span className="cursor-pointer transition-colors duration-300 hover:text-pink-500">
            <FaInstagram size={24} />
          </span>
          <span className="cursor-pointer transition-colors duration-300 hover:text-blue-600">
            <FaLinkedin size={24} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
