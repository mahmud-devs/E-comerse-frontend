import React from "react";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="pb-[80px]">
      <div className="bg-white p-6 md:mx-auto">
        <div className="flex justify-center">
          <div className="my-6 flex h-[120px] w-[120px] items-center justify-center rounded-full bg-green-500 ">
            <span className="text-[70px] text-white"><FaCheck /></span>
          </div>
        </div>
        <div className="text-center">
          <h3 className="text-center text-base font-semibold text-gray-900 md:text-2xl">
            Payment Successfull!
          </h3>
          <p className="my-2 text-gray-600">
            Thank you for completing your secure online payment.
          </p>
          <p> Have a great day! </p>
          <div className="py-10 text-center">
            <Link
              to="/product"
              className="inline-block bg-indigo-600 px-12 py-3 font-semibold text-white hover:bg-indigo-500"
            >
              GO BACK
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
