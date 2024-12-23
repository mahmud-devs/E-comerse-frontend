import React, { useEffect, useState } from "react";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import InnerImageZoom from "react-inner-image-zoom";
import { useParams } from "react-router-dom";
const ImageGallery = ({ image }) => {
  const params = useParams();
  const [mainImage, setmainImage] = useState(image && image[0]);
  // console.log(image[0]);

  const handleChangeImage = (item) => {
    setmainImage(item);
  };
  useEffect(() => {
    setmainImage(image[0]);
  }, [params.id]);
  return (
    <div className="flex items-start gap-x-8">
      <div className="flex w-[25%] flex-col gap-y-[15px]">
        {image?.slice(0, 4).map((item, index) => (
          <div
            key={index}
            className="flex h-[140px] w-full items-center justify-center rounded bg-white_F5F5F5"
            onClick={() => handleChangeImage(item)}
          >
            <img
              src={item ? item : ""}
              alt={item}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
      <div className="flex h-[605px] w-[75%] items-center justify-center rounded bg-white_F5F5F5">
        {image?.slice(0, 1).map((item, index) => (
          <div>
            <InnerImageZoom key={index} src={item && item} alt={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
