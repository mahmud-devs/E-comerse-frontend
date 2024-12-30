import React from "react";
import BreadCrum from "../../Components/CommonComponents/BreadCrum";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="mb-[100px] mt-[50px]">
      <div className="container">
        <BreadCrum />
        <div>
          <h3 className="mb-[40px] text-center font-inter text-[110px] font-medium text-textBlack_000000">
            404 Not Found
          </h3>
          <p className="mb-[80px] text-center font-popins text-[16px] font-normal">
            Your visited page not found. You can return to home page.
          </p>
          <div className="mt-1 flex justify-center">
            <Link to="/home">
              <button className="rounded bg-red_DB4444 px-12 py-4 font-popins text-[16px] font-medium text-white_FAFAFA transition-all hover:opacity-70">
                Back to home page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
