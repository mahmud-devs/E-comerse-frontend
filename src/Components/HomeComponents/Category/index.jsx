import React from "react";
import ProductCommonLayout from "../../CommonComponents/ProductCommonLayout";
import CategoryComponent from "../../CommonComponents/CategoryComponent";
import {
  IoCameraSharp,
  IoGameController,
  IoPhonePortraitOutline,
} from "react-icons/io5";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { ImHeadphones } from "react-icons/im";
import { useGetCategoryQuery } from "../../../Features/Api/ExcluciveApi";

// const categoryBrowse = [
//   {
//     id: 1,
//     name: "Phone",
//     img: <IoPhonePortraitOutline />,
//   },
//   {
//     id: 2,
//     name: "Computers",
//     img: <HiOutlineComputerDesktop />,
//   },
//   {
//     id: 3,
//     name: "SmartWatch",
//     img: <BsSmartwatch />,
//   },
//   {
//     id: 4,
//     name: "Camera",
//     img: <IoCameraSharp />,
//   },
//   {
//     id: 5,
//     name: "HeadPhones",
//     img: <ImHeadphones />,
//   },
//   {
//     id: 6,
//     name: "Gaming",
//     img: <IoGameController />,
//   },
//   {
//     id: 7,
//     name: "Phone",
//     img: <IoPhonePortraitOutline />,
//   },
//   {
//     id: 8,
//     name: "Computers",
//     img: <HiOutlineComputerDesktop />,
//   },
//   {
//     id: 9,
//     name: "SmartWatch",
//     img: <BsSmartwatch />,
//   },
//   {
//     id: 10,
//     name: "Camera",
//     img: <IoCameraSharp />,
//   },
//   {
//     id: 11,
//     name: "HeadPhones",
//     img: <ImHeadphones />,
//   },
//   {
//     id: 12,
//     name: "Gaming",
//     img: <IoGameController />,
//   },
// ];

const Category = () => {
  const { data, isLoading, error } = useGetCategoryQuery();

  return (
    <div className="mb-[70px] mt-[150px]">
      <div className="container">
        <div className="border-b-[1.5px] border-[rgba(0,0,0,0.3)] pb-[70px]">
          <ProductCommonLayout
            ProductCard={CategoryComponent}
            isArrowsTrue={true}
            heading={"Categories"}
            partialItemShow={6}
            componentData={data?.data}
            description={"Browse By Category"}
            isLoading={isLoading}
            categorySkeleton={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
