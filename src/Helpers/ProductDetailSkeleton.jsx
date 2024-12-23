import React from "react";

const ProductDetailSkeleton = () => {
  return (
    <div className="max-w-7xl mx-auto p-8 bg-white  rounded-lg flex">
      {/* Sidebar Thumbnails */}
      <div className="w-1/6 flex flex-col space-y-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="w-full h-28 bg-gray-300 rounded-lg animate-pulse"></div>
        ))}
      </div>

      {/* Main Image */}
      <div className="w-1/2 px-6">
        <div className="w-full h-[500px] bg-gray-300 rounded-lg animate-pulse"></div>
      </div>

      {/* Product Info */}
      <div className="w-1/3">
        <div className="h-8 bg-gray-300 rounded w-3/4 mb-4 animate-pulse"></div>
        <div className="h-6 bg-gray-300 rounded w-1/2 mb-4 animate-pulse"></div>
        <div className="h-4 bg-gray-300 rounded w-1/3 mb-6 animate-pulse"></div>

        {/* Color Select */}
        <div className="flex items-center space-x-4">
          <div className="w-6 h-6 bg-gray-300 rounded-full animate-pulse"></div>
          <div className="w-6 h-6 bg-gray-300 rounded-full animate-pulse"></div>
        </div>

        {/* Sizes */}
        <div className="flex space-x-4 mt-6">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-16 h-10 bg-gray-300 rounded animate-pulse"></div>
          ))}
        </div>

        {/* Quantity + Buy Now */}
        <div className="flex items-center mt-8 space-x-4">
          <div className="w-10 h-10 bg-gray-300 rounded animate-pulse"></div>
          <div className="w-10 h-10 bg-gray-300 rounded animate-pulse"></div>
          <div className="w-28 h-12 bg-red-300 rounded animate-pulse"></div>
        </div>

        {/* Delivery Section */}
        <div className="mt-10 space-y-4">
          <div className="w-full h-20 bg-gray-300 rounded-lg animate-pulse"></div>
          <div className="w-full h-20 bg-gray-300 rounded-lg animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailSkeleton;
