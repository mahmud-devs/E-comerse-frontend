import React from "react";

const ProductSkeleton = () => {
  return (
    <div>
      <div>
        <div className="w-[250px]">
          <div className="group relative w-full animate-pulse cursor-pointer rounded bg-white_F5F5F5 px-3 pb-5 pt-3">
            <div className="flex items-start justify-between">
              <span className="inline-block h-6 w-16 rounded bg-gray-500 px-3 py-1 font-popins text-[14px] text-white_FFFFFF"></span>
              <div className="relative">
                <div className="absolute right-0 top-0 flex flex-col gap-y-2">
                  <span className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-gray-500 text-lg"></span>
                  <span className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-gray-500 text-lg"></span>
                </div>
              </div>
            </div>
            <div className="w-full p-6">
              <div className="h-48 w-full bg-gray-300"></div>{" "}
              {/* Skeleton for image */}
            </div>
            <div className="overlay absolute bottom-0 left-0 flex h-10 w-full items-center justify-center rounded-b bg-textBlack_000000 py-2 font-popins text-[16px] font-normal text-white_FFFFFF opacity-0 transition-all group-hover:opacity-100">
              <div className="h-4 w-24 rounded bg-gray-300"></div>{" "}
              {/* Skeleton for button */}
            </div>
          </div>

          {/* =========================================================== */}

          <div className="mt-4">
            <div className="mb-2 h-6 w-48 rounded bg-gray-300"></div>{" "}
            {/* Skeleton for product name */}
            <div className="mt-2 flex items-center gap-x-3">
              <div className="h-6 w-16 rounded bg-gray-300"></div>{" "}
              {/* Skeleton for price */}
              <div className="h-6 w-24 rounded bg-gray-300"></div>{" "}
              {/* Skeleton for old price */}
            </div>
            <div className="mt-2 flex items-center">
              {[...new Array(5)].map((_, index) => (
                <span
                  key={index}
                  className="mr-1 inline-block text-lg text-yellow-500"
                >
                  <div className="h-5 w-5 rounded-full bg-gray-300"></div>{" "}
                  {/* Skeleton for star */}
                </span>
              ))}
              <div className="ms-2 inline-block font-popins text-sm font-semibold text-textBlack_000000 opacity-50">
                <div className="h-4 w-16 rounded bg-gray-300"></div>{" "}
                {/* Skeleton for rating count */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
