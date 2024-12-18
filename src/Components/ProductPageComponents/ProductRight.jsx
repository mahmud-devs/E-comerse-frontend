import React, { useState } from "react";
import { useGetAllProductQuery } from "../../Features/Api/ExcluciveApi";
import ProductCard from "../CommonComponents/ProductCard";
import { FaThList } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";

const ProductRight = () => {
  const { data, isLodaing, error } = useGetAllProductQuery();
  const [listStyle, setlistStyle] = useState(false);

  const [page, setpage] = useState(1);
  const [pagePerShow, setpagePerShow] = useState(8);
  let totalPage = data?.data?.length / pagePerShow;

  const handleChange = () => {
    setlistStyle(!listStyle);
  };

  const handlePerItem = (index) => {
    if (index > 0 && index <= Math.ceil(totalPage)) {
      setpage(index);
    }
  };
  const handleDropdown = (event) => {
    setpagePerShow(event.target.value);
  };

  console.log(page);

  return (
    <div className="w-[82%]">
      <div className="mb-8 flex items-center justify-end gap-x-7">
        <div className="flex items-center justify-end gap-x-2">
          <h2 className="text-textBlack_000000000 font-popins text-[16px] font-normal">
            Show :
          </h2>
          <select
            name=""
            id=""
            className="rounded-sm bg-slate-200 px-3 py-1"
            onChange={handleDropdown}
          >
            <option value="8">8</option>
            <option value="16">16</option>
            <option value="24">24</option>
          </select>
        </div>
        <div className="flex justify-between gap-x-2">
          <div onClick={handleChange}>
            <span
              className={
                listStyle
                  ? "cursor-pointer text-[30px] text-gray-400"
                  : "cursor-pointer text-[30px] text-textBlack_000000"
              }
            >
              <IoGrid />
            </span>
          </div>
          <div onClick={handleChange}>
            <span
              className={
                listStyle
                  ? "cursor-pointer text-[30px] text-textBlack_000000"
                  : "cursor-pointer text-[30px] text-gray-400"
              }
            >
              <FaThList />
            </span>
          </div>
        </div>
      </div>
      {/* ============== product ================= */}

      <div
        className={
          listStyle
            ? "flex flex-col items-center ps-8"
            : "flex flex-wrap justify-between ps-8"
        }
      >
        {data?.data?.slice(page * 8 - 8, page * pagePerShow).map((item) => (
          <ProductCard itemData={item ? item : {}} listStyle={listStyle} />
        ))}
      </div>

      {/* =============== ====================== */}

      <div className="mb-20 flex items-center justify-center">
        <ul class="inline-flex h-10 -space-x-px text-base">
          <li>
            <span
              href="#"
              class="ms-0 flex h-10 cursor-pointer items-center justify-center rounded-s-lg border border-e-0 border-gray-300 bg-white px-4 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              onClick={() => handlePerItem(page - 1)}
            >
              Previous
            </span>
          </li>
          {[...new Array(Math.ceil(totalPage) || 8)].map((_, index) => (
            <li>
              <span
                href="#"
                className={
                  index + 1 === page
                    ? "border-redDB4444 flex h-10 cursor-pointer items-center justify-center border bg-red_DB4444 px-4 leading-tight text-white_FFFFFF"
                    : "flex h-10 cursor-pointer items-center justify-center border border-gray-300 bg-white px-4 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                }
                onClick={() => handlePerItem(index + 1)}
              >
                {index + 1}
              </span>
            </li>
          ))}

          <li>
            <span
              href="#"
              class="flex h-10 cursor-pointer items-center justify-center rounded-e-lg border border-gray-300 bg-white px-4 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              onClick={() => handlePerItem(page + 1)}
            >
              Next
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductRight;
