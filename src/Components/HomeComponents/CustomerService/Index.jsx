import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { TfiHeadphoneAlt } from "react-icons/tfi";

const CustomerService = () => {
  const service = [
    {
      id: 1,
      icons: (
        <TbTruckDelivery className="h-[70px] w-[70px] rounded-full bg-textBlack_000000 p-3 text-4xl text-white_FFFFFF" />
      ),
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140",
    },
    {
      id: 2,
      icons: (
        <TfiHeadphoneAlt className="h-[70px] w-[70px] rounded-full bg-textBlack_000000 p-3 text-4xl text-white_FFFFFF" />
      ),
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support",
    },

    {
      id: 3,
      icons: (
        <TbTruckDelivery className="h-[70px] w-[70px] rounded-full bg-textBlack_000000 p-3 text-4xl text-white_FFFFFF" />
      ),
      title: "MONEY BACK GUARANTEE",
      description: "We reurn money within 30 days",
    },
  ];
  return (
    <div className="mb-[140px]">
      <div className="container"></div>
      <div className="flex items-center justify-around">
        {service?.map((item) => (
          <div className="flex flex-col items-center">
            <span className="inline-block rounded-full bg-[rgba(47,46,48,0.3)] p-[15px]">
              {item.icons}
            </span>
            <h2 className="mt-6 font-popins text-lg font-semibold text-textBlack_000000">
              {item.title}
            </h2>
            <h3 className="mt-2 font-popins text-[14px] font-normal text-textBlack_000000">
              {item.description}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerService;
