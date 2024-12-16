import React from "react";
import { CiTwitter } from "react-icons/ci";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { IoSendOutline } from "react-icons/io5";
import { RiFacebookLine } from "react-icons/ri";
import qrcode from "../../../assets/Footer/Qrcode.png";
import playStore from "../../../assets/Footer/plastore.png";
import appStore from "../../../assets/Footer/app.png";
const Footer = () => {
  return (
    <div className="bg-textBlack_000000 pt-20">
      <div className="container">
        <div className="flex items-start justify-between pb-20">
          {/* ================ */}
          <div className="flex flex-col items-start gap-y-4 text-white_FAFAFA">
            <h2 className="cursor-pointer font-inter text-[24px] font-bold text-white_FAFAFA">
              Exclusive
            </h2>
            <h3 className="font-popins text-[20px] font-medium text-white_FAFAFA">
              Subscribe
            </h3>
            <p className="text-md font-popins font-normal text-white_FAFAFA">
              Get 10% off your first order
            </p>
            <div className="relative">
              <input
                type="text"
                placeholder="Enter your email"
                className="rounded-md border-[1px] border-white_FAFAFA bg-transparent px-3 py-2"
              />
              <span className="absolute right-3 top-1/2 inline-block -translate-y-1/2 cursor-pointer text-white_FAFAFA">
                <IoSendOutline />
              </span>
            </div>
          </div>
          {/* ================ */}
          <div className="flex flex-col items-start gap-y-4 text-white_FAFAFA">
            <h2 className="cursor-pointer font-inter text-[20px] font-medium text-white_FAFAFA">
              Support
            </h2>
            <p className="font-popins text-[16px] font-normal text-white_FAFAFA">
              111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.
            </p>
            <a className="text-md font-popins font-normal text-white_FAFAFA">
              exclusive@gmail.com
            </a>
            <a href="#" className="text-white_FAFAFA">
              +88015-88888-9999
            </a>
          </div>
          {/* ================ */}
          <div className="flex flex-col items-start gap-y-4 text-white_FAFAFA">
            <h2 className="cursor-pointer font-inter text-[20px] font-medium text-white_FAFAFA">
              Account
            </h2>
            <p className="font-popins text-[16px] font-normal text-white_FAFAFA">
              My Account
            </p>
            <a className="text-md font-popins font-normal text-white_FAFAFA">
              Login / Register
            </a>
            <a href="#">Cart</a>
            <a href="#">Wishlist</a>
            <a href="#">Shop</a>
          </div>
          {/* ================ */}
          <div className="flex flex-col items-start gap-y-4 text-white_FAFAFA">
            <h2 className="cursor-pointer font-inter text-[20px] font-medium text-white_FAFAFA">
              Quick Link
            </h2>
            <p className="cursor-pointer font-popins text-[16px] font-normal text-white_FAFAFA">
              Privacy Policy
            </p>
            <a className="text-md cursor-pointer font-popins font-normal text-white_FAFAFA">
              Terms Of Use
            </a>
            <a
              className="text-md font-popins font-normal text-white_FAFAFA"
              href="#"
            >
              FAQ
            </a>
            <a
              className="text-md font-popins font-normal text-white_FAFAFA"
              href="#"
            >
              Contact
            </a>
          </div>
          {/* ================ */}
          <div className="flex flex-col items-start gap-y-4 text-white_FAFAFA">
            <h2 className="cursor-pointer font-inter text-[20px] font-medium text-white_FFFFFF">
              Download App
            </h2>
            <p className="font-popins text-[14px] font-normal opacity-70">
              Save $3 with App New User Only
            </p>
            <div className="flex w-full cursor-pointer">
              <div className="w-1/2">
                <img src={qrcode} alt={qrcode} />
              </div>
              <div className="flex h-full w-1/2 flex-col gap-y-[10px]">
                <div className="h-1/2 w-full">
                  <img src={playStore} alt={playStore} />
                </div>
                <div className="h-1/2 w-full">
                  <img src={appStore} alt={appStore} />
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-x-6">
              <span className="inline-block cursor-pointer text-xl transition-all duration-200 hover:scale-125">
                <FaFacebookF />
              </span>
              <span className="inline-block cursor-pointer text-xl transition-all duration-200 hover:scale-125">
                <FaTwitter />
              </span>
              <span className="inline-block cursor-pointer text-xl transition-all duration-200 hover:scale-125">
                <FaInstagram />
              </span>

              <span className="inline-block cursor-pointer text-xl transition-all duration-200 hover:scale-125">
                <FaLinkedinIn />
              </span>
            </div>
          </div>
          {/* ================ */}
        </div>

        <div className="flex items-center justify-center pb-6 text-white_FFFFFF">
          <h4 className="font-popins text-[16px] font-normal text-white_FFFFFF opacity-30">
            &copy; Copyright Rimel 2022. All right reserved
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
