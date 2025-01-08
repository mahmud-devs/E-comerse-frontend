import React, { useEffect, useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { CiLogout } from "react-icons/ci";
import { FaRegHeart, FaRegStar, FaRegUser } from "react-icons/fa";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import { ImCancelCircle } from "react-icons/im";
import { RiLogoutBoxLine } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import { getTotalItem } from "../../../Features/AllSlice/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { axiosInstance } from "../../../Helpers/axios";

const NavBar = () => {
  // ========== all states =============
  const { caerTotalPrice, cartTotalItem } = useSelector((state) => state?.cart);
  const dispatch = useDispatch();
  const [allMenu, setallMenu] = useState(false);
  const navItem = [
    {
      id: 1,
      item: "Home",
      navigate: "Home",
    },
    {
      id: 2,
      item: "Contact",
      navigate: "Contact",
    },
    {
      id: 3,
      item: "product",
      navigate: "product",
    },
    {
      id: 4,
      item: "Sign Up",
      navigate: "SignUp",
    },
  ];
  // ============== dropdown menu function ==============
  const HandleMenu = () => {
    setallMenu(!allMenu);
  };

  useEffect(() => {
    dispatch(getTotalItem());
  }, [localStorage.getItem("addToCart")]);

  // =============== handleLogout function ===============

  const handleLogout = async () => {
    try {
      const logoutData = await axiosInstance.get("/auth/logout");
      console.log(logoutData);
    } catch (error) {
      console.log("error from logout", error);
    }
  };
  return (
    <div className="border-b-[1.5px] border-[rgba(0,0,0,0.3)] pb-3 pt-10">
      <div className="container flex items-center justify-between">
        <div>
          <h1 className="cursor-pointer font-inter text-[24px] font-bold text-textBlack_000000">
            Exclusive
          </h1>
        </div>
        {/* =============================================== */}
        <div>
          <ul className="flex items-center gap-x-[48px]">
            {navItem?.map((nav) => (
              <li key={nav.id} className="menuUnderline">
                <NavLink
                  to={`/${nav.navigate}`}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "font-popins text-[16px] font-normal capitalize text-greenButton_00FF66"
                      : isActive
                        ? "font-popins text-[16px] font-normal capitalize text-red_DB4444"
                        : "font-popins text-[16px] font-normal capitalize text-black"
                  }
                >
                  {nav.item}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        {/* ================================================ */}
        <div className="flex basis-1/3 items-center">
          {/* ==================================== */}
          <div className="relative w-3/5">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full rounded bg-white_F5F5F5 px-4 py-[10px] pe-[70px] text-[16px]"
            />
            <span className="absolute right-[10%] top-1/2 -translate-y-1/2 text-2xl">
              <FiSearch />
            </span>
          </div>
          {/* ============================= */}
          <div className="relative flex w-2/5 items-center justify-end gap-x-10">
            <span className="cursor-pointer text-2xl">
              <FaRegHeart />
            </span>
            <Link to="/cart">
              <span
                className="amount cursor-pointer text-2xl"
                data-cartTotalItem={cartTotalItem}
              >
                <BsCart3 />
              </span>
            </Link>
            <span
              onClick={HandleMenu}
              className="cursor-pointer rounded-full bg-red_DB4444 p-2 text-[18px] text-white_FFFFFF"
            >
              <FaRegUser />
            </span>

            {/* ============== dropdown menu========================= */}
            {allMenu && (
              <div className="absolute right-0 top-10 z-30 flex w-[250px] flex-col rounded bg-[rgba(0,0,0,0.25)] pb-3 pt-4 backdrop-blur-2xl">
                <div className="dropDown flex items-center gap-x-3 py-2 ps-8 text-white_FAFAFA transition-all hover:py-3">
                  <span className="text-2xl">
                    <FaRegUser />
                  </span>
                  <h3 className="text-4 font-popins">Manage My Account</h3>
                </div>

                <div className="dropDown flex items-center gap-x-3 py-2 ps-8 text-white_FAFAFA transition-all hover:py-3">
                  <span className="text-2xl">
                    <FiShoppingBag />
                  </span>
                  <h3 className="text-4 font-popins">My Order</h3>
                </div>

                <div className="dropDown flex items-center gap-x-3 py-2 ps-8 text-white_FAFAFA transition-all hover:py-3">
                  <span className="text-2xl">
                    <ImCancelCircle />
                  </span>
                  <h3 className="text-4 font-popins">My Cancellations</h3>
                </div>

                <div className="dropDown flex items-center gap-x-3 py-2 ps-8 text-white_FAFAFA transition-all hover:py-3">
                  <span className="text-2xl">
                    <FaRegStar />
                  </span>
                  <h3 className="text-4 font-popins">My Reviews</h3>
                </div>

                <div
                  onClick={handleLogout}
                  className="dropDown flex items-center gap-x-3 py-2 ps-8 text-white_FAFAFA transition-all hover:py-3"
                >
                  <span className="text-2xl">
                    <RiLogoutBoxLine />
                  </span>
                  <h3 className="text-4 font-popins">Logout</h3>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
