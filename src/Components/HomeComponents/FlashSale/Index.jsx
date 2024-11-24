import React from "react";
import Heading from "../../CommonComponents/Heading";
import Timer from "../../CommonComponents/Timer";

const FlashSale = () => {
  return (
    <div className="mb-[500px] mt-[140px]">
      <div className="container">
        <div className="flex items-end gap-x-[87px]">
          <Heading title={"Today’s"} description={"Flash Sales"} />
          <Timer />
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
