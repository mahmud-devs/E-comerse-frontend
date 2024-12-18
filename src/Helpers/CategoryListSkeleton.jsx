import React from "react";

const CategoryListSkeleton = () => {
  return (
    <div>
      {Array(10)
        .fill(null)
        .map((_, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-s-md py-3 pe-11 transition-all duration-300 hover:bg-[rgba(0,0,0,0.6)] hover:pl-6"
          >
            <div className="h-[16px] w-[100%] animate-pulse rounded-md bg-gray-400"></div>
          </div>
        ))}
    </div>
  );
};

export default CategoryListSkeleton;
