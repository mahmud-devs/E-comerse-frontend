import React from "react";

const Header = () => {
  return (
    <div className="bg-textBlack_000000 py-3">
      <div className="container flex items-center justify-between">
        <div></div>
        <div>
          <h3 className="text-white_FAFAFA font-popins text-[14px] font-normal">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </h3>
        </div>
        <div>
          <select
            className="text-white_FAFAFA font-popins bg-transparent text-[14px] font-normal"
            name=""
            id=""
          >
            <option value="#">English</option>
            <option value="#">English</option>
            <option value="#">English</option>
            <option value="#">English</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header;
