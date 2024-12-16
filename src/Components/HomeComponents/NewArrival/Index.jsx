import React from "react";
import ProductCommonLayout from "../../CommonComponents/ProductCommonLayout";

import ps5 from "../../../assets/NewArrival/ps5.png";
import woman from "../../../assets/NewArrival/woman.png";
import speaker from "../../../assets/NewArrival/speaker.png";
import perfume from "../../../assets/NewArrival/perfume.png";

const NewArrival = () => {
  return (
    <div className="mb-[140px]">
      <div className="container">
        <ProductCommonLayout heading={"Featured"} description={"New Arrival"} />

        {/* =========================== */}
        <div className="flex h-[600px] w-full items-center gap-x-8">
          <div className="h-full w-1/2 bg-textBlack_000000">
            <img className="h-full w-full px-8 pt-[90px]" src={ps5} alt={ps5} />
          </div>
          <div className="flex h-full w-1/2 flex-col justify-between">
            <div className="h-[48%] w-full bg-textBlack_000000">
              <img
                src={woman}
                className="h-full w-full object-cover ps-[190px]"
                alt={woman}
              />
            </div>
            <div className="flex h-[48%] w-full gap-x-[30px]">
              <div className="h-full w-1/2 bg-textBlack_000000">
                <img
                  src={speaker}
                  className="h-full w-full object-contain p-[30px]"
                  alt={speaker}
                />
              </div>
              <div className="h-full w-1/2 bg-textBlack_000000">
                <img
                  src={perfume}
                  className="h-full w-full object-contain p-[30px]"
                  alt={perfume}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
