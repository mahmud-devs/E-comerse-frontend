import React from "react";
import CategoryListSkeleton from "../../Helpers/CategoryListSkeleton";

const ProductLeft = ({ categoryData, isLoading, handleCategory }) => {
  return (
    <div className="mb-[300px] w-[18%]">
      <div>
        <h1 className="mb-4 cursor-pointer font-popins text-[20px] font-bold text-textBlack_000000">
          Shop By Category
        </h1>

        {isLoading ? (
          <CategoryListSkeleton />
        ) : (
          categoryData?.map((item) => (
            <div
              onClick={() => handleCategory(item._id)}
              className="flex cursor-pointer items-center justify-between rounded-s-md py-3 pe-11 text-textBlack_000000 transition-all duration-300 hover:bg-[rgba(0,0,0,0.6)] hover:pl-6 hover:text-white_FAFAFA"
            >
              <li className="font-popins text-[16px] font-normal">
                {item.name}
              </li>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductLeft;
