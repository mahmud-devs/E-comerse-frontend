import React from "react";

const CategorySkeleton = () => {
  return (
    <div>
      <div className="flex h-[145px] w-[170px] animate-pulse items-center justify-center rounded border-[2px] border-[rgba(0,0,0,0.1)] bg-gray-200">
        <div className="flex flex-col items-center gap-y-1">
          <div className="h-[80px] w-[80px] rounded-full bg-gray-300"></div>
          <div className="h-[16px] w-[100px] rounded bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
};

export default CategorySkeleton;
