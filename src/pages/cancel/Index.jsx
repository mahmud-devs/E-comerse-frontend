import React from "react";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";

const Cancel = () => {
  return (
    <div className="pb-[80px]">
      <div className="bg-white p-6 md:mx-auto">
        <div className="flex justify-center">
          <div className="my-6 flex h-[120px] w-[120px] items-center justify-center rounded-full bg-red-500">
            <span className="text-[70px] text-white">
              <ImCross />
            </span>
          </div>
        </div>
        <div className="text-center">
          <h3 className="text-center text-base font-semibold text-gray-900 md:text-2xl">
            Payment Canceled!
          </h3>
          <p className="my-2 text-gray-600">You have canceled the payment.</p>
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

export default Cancel;
