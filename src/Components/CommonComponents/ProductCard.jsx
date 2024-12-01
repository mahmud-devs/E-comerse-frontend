import React from "react";
import { FaRegEye, FaRegHeart, FaStar } from "react-icons/fa";
import product1 from "../../assets/Productcard/Product1.png";
const ProductCard = () => {
  return (
    <div>
      <div className="w-[250px]">
        <div className="group relative w-full cursor-pointer rounded bg-white_F5F5F5 px-3 pb-9 pt-3">
          <div className="flex items-start justify-between">
            <span className="inline-block rounded bg-red_DB4444 px-3 py-1 font-popins text-[14px] text-white_FFFFFF">
              -40%
            </span>
            <div className="relative">
              <div className="absolute right-0 top-0 flex flex-col gap-y-2">
                <span className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white_FFFFFF text-lg transition-all hover:bg-red_DB4444 hover:text-white_FFFFFF">
                  <FaRegHeart />
                </span>
                <span className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white_FFFFFF text-lg transition-all hover:bg-red_DB4444 hover:text-white_FFFFFF">
                  <FaRegEye />
                </span>
              </div>
            </div>
          </div>
          <div className="w-full">
            <img
              src={product1}
              alt={product1}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="overlay duration-300 absolute bottom-0 left-0 flex h-10 w-full items-center justify-center rounded-b bg-textBlack_000000 py-2 font-popins text-[16px] font-normal text-white_FFFFFF opacity-0 transition-all group-hover:opacity-100">
            Add To Cart
          </div>
        </div>

        {/* =========================================================== */}

        <div className="mt-4">
          <span className="inline-block font-popins text-[16px] font-medium text-textBlack_000000">
            HAVIT HV-G92 Gamepad
          </span>
          <div className="mt-2 flex items-center gap-x-3">
            <span className="font-popins text-[16px] font-medium text-red_DB4444">
              $120
            </span>
            <span className="font-popins text-[16px] font-medium text-textBlack_000000 line-through opacity-50">
              $160
            </span>
          </div>
          <div className="mt-2 flex items-center">
            {[...new Array(5)].map((_, index) => (
              <span className="mr-1 inline-block text-lg text-yellow-500">
                <FaStar />
              </span>
            ))}
            <span className="ms-2 inline-block font-popins text-sm font-semibold text-textBlack_000000 opacity-50">
              (88)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
