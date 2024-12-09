import React from "react";

const CategoryComponent = ({ itemData }) => {
  

  return (
    <div className="flex h-[145px] w-[170px] cursor-pointer items-center justify-center rounded border-[2px] border-[rgba(0,0,0,0.3)] text-textBlack_000000 transition-all duration-300 hover:border-red_DB4444 hover:bg-red_DB4444 hover:text-white_FAFAFA">
      <div className="flex flex-col items-center gap-y-4">
        <span className="text-[50px]">{itemData.img}</span>
        <h2 className="font-popins text-[16px] font-normal">{itemData.name}</h2>
      </div>
    </div>
  );
};

export default CategoryComponent;
