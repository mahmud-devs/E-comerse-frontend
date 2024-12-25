import React from "react";
import BreadCrum from "../../Components/CommonComponents/BreadCrum";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import {
  removecart,
  increment,
  decrement,
} from "../../Features/AllSlice/cartSlice";
import { ImCross } from "react-icons/im";

const AddToCart = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state?.cart?.value);
  const handleRemoveCart = (item) => {
    dispatch(removecart(item));
  };
  const increaseItem = (item) => {
    dispatch(increment(item));
  };
  const decreaseItem = (item) => {
    dispatch(decrement(item));
  };
  return (
    <div className="my-20">
      <div className="container">
        <BreadCrum />

        {/* ===================================== */}

        <div className="mb-10 flex justify-between rounded shadow-lg">
          <div className="flex flex-1 justify-start py-6">
            <h1 className="pl-10 font-popins text-[20px] font-normal text-textBlack_000000">
              Product
            </h1>
          </div>
          <div className="flex flex-1 justify-center py-6">
            <h1 className="font-popins text-[20px] font-normal text-textBlack_000000">
              Price
            </h1>
          </div>
          <div className="flex flex-1 justify-center py-6">
            <h1 className="font-popins text-[20px] font-normal text-textBlack_000000">
              Quantity
            </h1>
          </div>
          <div className="flex flex-1 justify-end py-6">
            <h1 className="pr-10 font-popins text-[20px] font-normal text-textBlack_000000">
              Subtotal
            </h1>
          </div>
        </div>

        {/* ================================================ */}

        <div className="h-[500px] w-full overflow-y-scroll">
          {cartItem?.map((item) => (
            <div className="mb-10" key={item}>
              <div className="flex justify-between rounded shadow-md">
                <div className="flex flex-1 justify-start py-6">
                  <div className="relative flex items-center gap-x-5 pl-10">
                    <img
                      src={item.image[0]}
                      alt={item.image[0]}
                      className="h-[54px] w-[54px] object-contain"
                    />
                    <span
                      className="absolute left-[12%] top-[-13%] flex h-[20px] w-[20px] cursor-pointer items-center justify-center rounded-full bg-red_DB4444 font-semibold text-[12px] text-white_FFFFFF hover:opacity-70"
                      onClick={() => handleRemoveCart(item)}
                    >
                      <ImCross />
                    </span>

                    <h1 className="text-text_black000000 font-popins text-[16px] font-normal">
                      {item.name}
                    </h1>
                  </div>
                </div>

                <div className="flex flex-1 items-center justify-center py-6">
                  <h1 className="text-text_black000000 font-popins text-[20px] font-normal">
                    ${item.price}
                  </h1>
                </div>

                <div className="flex flex-1 justify-center py-6">
                  <div className="flex w-[100px] items-center justify-between rounded border border-gray-400 px-4">
                    <h3 className="text-text_black000000 text-center w-[35px] font-popins text-[20px] font-normal">
                      {item.cartQuantity}
                    </h3>
                    <div className="flex flex-col items-center justify-center gap-y-1">
                      <span
                        className="inline-block cursor-pointer text-[22px] text-textBlack_000000 transition-all duration-150 hover:text-red_DB4444"
                        onClick={() => increaseItem(item)}
                      >
                        <IoIosArrowUp />
                      </span>

                      <span
                        className="inline-block cursor-pointer text-[22px] text-textBlack_000000 transition-all duration-150 hover:text-red_DB4444"
                        onClick={() => decreaseItem(item)}
                      >
                        <IoIosArrowDown />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 items-center justify-end py-6">
                  <h1 className="text-text_black000000 pr-10 font-popins text-[20px] font-normal">
                    ${item.price * item.cartQuantity}
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
