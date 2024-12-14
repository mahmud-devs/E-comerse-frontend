import React from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const Stars = ({ rating = 3.5 }) => {
  const starRating = Array.from({ length: 5 }, (_, index) => {
    if (rating >= index + 1) {
      return (
        <FaStar
          className="mr-1 inline-block text-lg text-yellow-500"
          key={index}
        />
      );
    } else if (rating >= index + 0.5) {
      return (
        <FaStarHalfAlt
          className="mr-1 inline-block text-lg text-yellow-500"
          key={index}
        />
      );
    } else {
      return <FaRegStar className="mr-1 inline-block text-lg" key={index} />;
    }
  });
  return <div>{starRating}</div>;
};

export default Stars;
