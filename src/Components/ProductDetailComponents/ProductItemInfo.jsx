import React, { useState } from "react";
import Stars from "../CommonComponents/Stars";
import { calculateDiscount } from "../../Helpers/calculateDiscount";
import { IoIosHeartEmpty } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { FaArrowsSpin, FaTruckFast } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { useAddToCartMutation } from "../../Features/Api/ExcluciveApi";
import { successToast, errorToast } from "../../Helpers/toast";

const ProductItemInfo = ({ itemData }) => {
  //   console.log(itemData);
  const { id } = useParams();
  const [cartQuantity, setcartQuantity] = useState(1);
  const size = [
    { id: 1, size: "XS" },
    { id: 2, size: "S" },
    { id: 3, size: "M" },
    { id: 4, size: "L" },
    { id: 5, size: "XL" },
  ];

  // ================= cart quantity increment
  const handleIncrement = () => {
    setcartQuantity((prev) => prev + 1);
  };
  // ================= cart quantity decrement
  const handleDecrement = () => {
    if (cartQuantity > 1) {
      setcartQuantity((prev) => prev - 1);
    }
  };
  // =========== useAddToCartMutation call ======

  const [AddToCart, { isLoading, isError, data }] = useAddToCartMutation();

  const handleAddToCart = async () => {
    try {
      const responce = await AddToCart({
        product: id,
        quantity: cartQuantity,
      });
      if (responce?.data?.success === true) {
        successToast("Item Successfully added to cart");
      } else {
        errorToast("Failed to add item to cart");
      }
    } catch (error) {
      console.error("error from add to cart page", error);
    }
  };
  return (
    <div>
      <div className="border-b border-black_363738 pb-6">
        <h3 className="font-inter text-2xl font-semibold text-textBlack_000000">
          {itemData ? itemData.name : "Havic HV G-92 Gamepad"}
        </h3>
        <div className="mb-4 flex items-center gap-x-2">
          <span className="inline-block">
            <Stars rating={itemData?.rating} />
          </span>
          <span className="text-md mt-1 inline-block font-popins font-normal text-textBlack_000000 opacity-50">
            ({itemData ? itemData.review.length : "0"} Review)
          </span>
          <span className="mx-1 inline-block">|</span>
          <span className="text-md mt-1 inline-block font-popins font-semibold text-greenButton_00FF66">
            {itemData?.stock > 0 ? "In stock" : "Out of stock"}
          </span>
        </div>
        <h4 className="mb-6 font-inter text-2xl font-normal text-textBlack_000000">
          $
          {itemData
            ? calculateDiscount(itemData.price, itemData.discount)
            : "0"}
        </h4>
        <h3 className="text-md mt-4 font-inter font-normal text-textBlack_000000">
          {itemData
            ? itemData.description
            : "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive."}
        </h3>
      </div>

      {/* ============================================= */}
      <div className="mt-6">
        <div className="flex items-center gap-x-3">
          <h2 className="font-inter text-[20px] font-normal text-textBlack_000000">
            Colours:
          </h2>
          <div className="flex h-[24px] w-[24px] items-center justify-center rounded-full border-[3px] border-textBlack_000000 p-[2px]">
            <span className="inline-block h-full w-full rounded-full bg-blueHover_A0BCE0"></span>
          </div>
          <div className="flex h-[24px] w-[24px] items-center justify-center rounded-full border-[3px] border-textBlack_000000 p-[2px]">
            <span className="inline-block h-full w-full rounded-full bg-red_DB4444"></span>
          </div>
        </div>
      </div>

      {/* ================================================ */}
      <div className="mt-[30px] flex items-center gap-x-3">
        <h2 className="text-text-textBlack_000000 font-inter text-[20px] font-normal">
          Size:
        </h2>

        <div className="flex items-center gap-x-3">
          {size.map((size) => (
            <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded border-2 border-black_363738 transition-all duration-200 hover:border-red_DB4444 hover:bg-red_DB4444 hover:text-white_FFFFFF">
              <span
                className="inline-block cursor-pointer font-popins text-[14px] font-bold"
                key={size.id}
              >
                {size.size}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ============================================== */}

      <div className="mt-10 flex items-center gap-x-4">
        <div className="flex items-center">
          <span
            onClick={handleDecrement}
            className="text-text-textBlack_000000 cursor-pointer rounded-l-lg border-2 border-black_363738 px-4 py-2 font-popins text-[20px] hover:bg-red_DB4444 hover:text-white_FFFFFF"
          >
            -
          </span>
          <span className="text-text-textBlack_000000 cursor-pointer border-2 border-l-0 border-black_363738 px-6 py-2 font-popins text-[20px] hover:bg-red_DB4444 hover:text-white_FFFFFF">
            {cartQuantity}
          </span>
          <span
            onClick={handleIncrement}
            className="text-text-textBlack_000000 cursor-pointer rounded-r-lg border-2 border-l-0 border-black_363738 px-4 py-2 font-popins text-[20px] hover:bg-red_DB4444 hover:text-white_FFFFFF"
          >
            +
          </span>
        </div>

        <button
          onClick={handleAddToCart}
          className="rounded-[5px] border-none bg-red_DB4444 px-[48px] py-[12px] font-popins text-[16px] font-medium text-white_FFFFFF"
        >
          Buy Now
        </button>

        <div className="cursor-pointer rounded border-2 border-black_363738 px-3 pb-1 pt-2 hover:bg-red-500 hover:text-white_FFFFFF">
          <span className="inline-block h-full w-full font-popins text-3xl font-bold">
            <IoIosHeartEmpty />
          </span>
        </div>
      </div>

      {/* ================================================== */}
      <div className="mt-10">
        <div className="flex w-full items-center gap-x-4 rounded-t-md border-x-2 border-b border-t-2 border-[rgba(0,0,0,0.44)] px-12 py-4">
          <span className="inline-block text-4xl">
            <FaTruckFast />
          </span>
          <div>
            <h4 className="text-text_black000000 font-popins text-[16px] font-medium">
              Free Delivery
            </h4>
            <p className="text-text_black000000 font-popins text-[12px] font-medium">
              Enter your postal code for Delivery Availability
            </p>
          </div>
        </div>

        <div className="flex w-full items-center gap-x-4 rounded-b-md border-x-2 border-b-2 border-t border-[rgba(0,0,0,0.44)] px-12 py-4">
          <span className="text-4xl">
            <FaArrowsSpin />
          </span>
          <div>
            <h4 className="text-text_black000000 font-popins text-[16px] font-medium">
              Return Delivery
            </h4>
            <p className="text-text_black000000 font-popins text-[12px] font-medium">
              Free 30 Days Delivery Returns. Details
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItemInfo;
