import React from "react";

const Heading = ({ title, description }) => {
  return (
    <div>
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <span className="block h-10 w-5 rounded bg-red_DB4444"></span>
          <span className="font-popins text-[16px] font-semibold capitalize text-red_DB4444">
            {title ? title : "Today’s"}
          </span>
        </div>
        <div>
          <h3 className="font-inter text-3xl font-semibold text-textBlack_000000">
            {description ? description : "Flash Sales"}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Heading;
