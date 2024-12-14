import React from "react";
import { FaRegEye, FaRegHeart, FaStar } from "react-icons/fa";
import product1 from "../../assets/Productcard/Product1.png";
import { calculateDiscount } from "../../Helpers/calculateDiscount";
import Stars from "./Stars";
const ProductCard = ({ itemData }) => {
  const discountPrice = calculateDiscount(
    itemData.price,
    itemData.discount,
  ).toFixed(2);

  return (
    <div>
      <div className="w-[250px]">
        <div className="group relative w-full cursor-pointer rounded bg-white_F5F5F5 px-8 pb-9 pt-10">
          <div className="absolute left-0 top-0 flex w-full items-start justify-between p-3">
            {itemData?.discount === 0 ? (
              <span className="inline-block rounded bg-transparent px-3 py-1 font-popins text-[14px] text-transparent">
                d
              </span>
            ) : (
              <span className="inline-block rounded bg-red_DB4444 px-3 py-1 font-popins text-[14px] text-white_FFFFFF">
                -{itemData ? itemData.discount : "00"}%
              </span>
            )}
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
          <div className="h-[226px] w-full">
            <img
              src={itemData ? itemData.image[0] : product1}
              alt={itemData ? itemData.image[0] : product1}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="overlay absolute bottom-0 left-0 flex h-10 w-full items-center justify-center rounded-b bg-textBlack_000000 py-2 font-popins text-[16px] font-normal text-white_FFFFFF opacity-0 transition-all duration-300 group-hover:opacity-100">
            Add To Cart
          </div>
        </div>

        {/* =========================================================== */}

        <div className="mt-4">
          <span className="inline-block w-full cursor-pointer truncate font-popins text-[16px] font-medium capitalize text-textBlack_000000">
            {itemData ? itemData.name : "Name missing"}
          </span>
          <div className="mt-2 flex items-center gap-x-3">
            <span className="font-popins text-[16px] font-medium text-red_DB4444">
              ${itemData ? discountPrice : "00"}
            </span>
            <span className="font-popins text-[16px] font-medium text-textBlack_000000 line-through opacity-50">
              ${itemData ? itemData.price : "00"}
            </span>
          </div>
          <div className="mt-2 flex items-center">
            <Stars rating={itemData.rating} />

            <span className="ms-2 mt-1 inline-block font-popins text-sm font-semibold text-textBlack_000000 opacity-50">
              {`(${itemData?.review?.length})`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
