import React, { useEffect } from "react";
import BreadCrum from "../../Components/CommonComponents/BreadCrum";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import {
  removecart,
  increment,
  decrement,
  getTotalItem,
} from "../../Features/AllSlice/cartSlice";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";

const AddToCart = () => {
  const dispatch = useDispatch();
  // const cartItem = useSelector((state) => state?.cart?.value);
  const { caerTotalPrice, cartTotalItem, value } = useSelector(
    (state) => state?.cart,
  );
  console.log(caerTotalPrice, cartTotalItem);

  const handleRemoveCart = (item) => {
    dispatch(removecart(item));
  };
  const increaseItem = (item) => {
    dispatch(increment(item));
  };
  const decreaseItem = (item) => {
    dispatch(decrement(item));
  };

  useEffect(() => {
    dispatch(getTotalItem());
  }, [localStorage.getItem("addToCart")]);
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

        <div className="customScroll h-[500px] w-full overflow-y-scroll">
          {value?.map((item) => (
            <div className="mb-10" key={item}>
              <div className="flex justify-between rounded shadow-md">
                <div className="flex flex-1 justify-start py-6">
                  <div className="relative flex items-center gap-x-5 pl-10">
                    <img
                      src={item?.image[0]}
                      alt={item?.image[0]}
                      className="h-[54px] w-[54px] object-contain"
                    />
                    <span
                      className="absolute left-[12%] top-[-13%] flex h-[20px] w-[20px] cursor-pointer items-center justify-center rounded-full bg-red_DB4444 text-[12px] font-semibold text-white_FFFFFF hover:opacity-70"
                      onClick={() => handleRemoveCart(item)}
                    >
                      <ImCross />
                    </span>

                    <h1 className="font-popins text-[16px] font-normal text-textBlack_000000">
                      {item?.name}
                    </h1>
                  </div>
                </div>

                <div className="flex flex-1 items-center justify-center py-6">
                  <h1 className="font-popins text-[20px] font-normal text-textBlack_000000">
                    ${item?.price}
                  </h1>
                </div>

                <div className="flex flex-1 justify-center py-6">
                  <div className="flex w-[100px] items-center justify-between rounded border border-gray-400 px-4">
                    <h3 className="w-[35px] text-center font-popins text-[20px] font-normal text-textBlack_000000">
                      {item?.cartQuantity}
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
                  <h1 className="pr-10 font-popins text-[20px] font-normal text-textBlack_000000">
                    ${item?.price * item?.cartQuantity}
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ============================================= */}
        <div className="mt-10">
          <div className="flex items-center justify-between">
            <Link to={"/product"}>
              <button className="rounded border-[2px] border-gray-300 bg-transparent px-[48px] py-[16px] font-popins text-[18px] font-medium text-textBlack_000000 transition-all duration-200 hover:border-red_DB4444 hover:bg-red_DB4444 hover:text-white_FFFFFF">
                Return To Shop
              </button>
            </Link>
            <button className="rounded border-[2px] border-gray-300 bg-transparent px-[40px] py-[16px] font-popins text-[18px] font-medium text-textBlack_000000 transition-all duration-200 hover:border-red_DB4444 hover:bg-red_DB4444 hover:text-white_FFFFFF">
              Update Cart
            </button>
          </div>
        </div>

        {/* ================================================== */}

        <div className="mt-[80px] flex items-start justify-between">
          <div className="flex items-center gap-x-3">
            <input
              type="text"
              className="border border-gray-300 px-10 py-3"
              placeholder="Coupon Code"
            />

            <button className="rounded bg-red_DB4444 px-[48px] py-[12px] font-popins text-[18px] font-medium text-white_FFFFFF transition-all duration-200 hover:opacity-75">
              Apply Coupon
            </button>
          </div>

          <div className="rounded-sm border-2 border-gray-300">
            <div class="w-[470px] bg-white px-4 pt-6 text-gray-900">
              <h1 className="mb-3 pl-3 font-popins text-[20px] font-normal text-textBlack_000000">
                Cart Total
              </h1>

              <div className="text-[16px relative inline-flex w-full items-center justify-between rounded-t-lg border-b border-gray-200 px-4 py-2 font-popins font-normal text-textBlack_000000 hover:bg-gray-100">
                <button type="button">Discount:</button>
                <span className="inline-block font-popins text-[16px] font-normal text-textBlack_000000">
                  0%
                </span>
              </div>

              <div className="text-[16px relative inline-flex w-full items-center justify-between rounded-t-lg border-b border-gray-200 px-4 py-2 font-popins font-normal text-textBlack_000000 hover:bg-gray-100">
                <button type="button">Quantity:</button>
                <span className="inline-block font-popins text-[16px] font-normal text-textBlack_000000">
                  {cartTotalItem}
                </span>
              </div>

              <div className="text-[16px relative inline-flex w-full items-center justify-between rounded-t-lg px-4 py-2 font-popins font-normal text-textBlack_000000 hover:bg-gray-100">
                <button type="button">Total:</button>
                <span className="inline-block font-popins text-[16px] font-normal text-textBlack_000000">
                  {caerTotalPrice}
                </span>
              </div>
            </div>
            <div className="mb-8 mt-4 flex w-full justify-center">
              <button className="rounded bg-red_DB4444 px-[48px] py-[12px] font-popins text-[18px] font-medium text-white_FFFFFF transition-all duration-200 hover:opacity-75">
                Procees to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
