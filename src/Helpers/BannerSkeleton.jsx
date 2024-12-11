import React from "react";

const BannerSkeleton = () => {
  return (
    <div className="flex h-[400px]  relative items-center justify-center bg-textBlack_000000 px-14">
      <div className="w-full  space-y-4">
        {/* Title Skeleton */}
        <div className="h-10 animate-pulse rounded-md bg-gray-700"></div>

        {/* Subtitle Skeleton */}
        <div className="h-6 w-3/4 animate-pulse rounded-md bg-gray-600"></div>

        {/* Line Skeletons */}
        <div className="space-y-2">
          <div className="h-4 animate-pulse rounded-md bg-gray-700"></div>
          <div className="h-4 animate-pulse rounded-md bg-gray-700"></div>
          <div className="h-4 animate-pulse rounded-md bg-gray-700"></div>
          <div className="h-4 animate-pulse rounded-md bg-gray-700"></div>
          <div className="h-4 animate-pulse rounded-md bg-gray-700"></div>
          <div className="h-4 animate-pulse rounded-md bg-gray-700"></div>
          <div className="h-4 animate-pulse rounded-md bg-gray-700"></div>
          <div className="h-4 animate-pulse rounded-md bg-gray-700"></div>
        </div>
      </div>
    </div>
  );
};

export default BannerSkeleton;
