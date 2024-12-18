import React from "react";
import { useLocation, Link } from "react-router-dom";

const BreadCrum = () => {
  const { pathname } = useLocation();
  let pathNameArr = pathname.split("/").filter((path) => path);
  // console.log(pathNameArr);

  let BreadCrumPath = "";

  return (
    <div className="mb-12 mt-20">
      <div className="flex items-center gap-x-1">
        <span className="inline-block rounded-sm bg-greenButton_00FF66 px-2 py-1 font-popins text-white_FFFFFF">
          <Link to={"/"}>Home</Link>
        </span>
        {pathNameArr?.map((name, index) => {
          BreadCrumPath += `/${name}`;
          const isLast = index === pathNameArr?.length - 1;
          return isLast ? (
            <div>
              <span
                key={index}
                className="mx-2 inline-block rounded-sm bg-red_DB4444 px-2 py-1 font-popins capitalize text-white_FFFFFF"
              >
                {name}
              </span>
            </div>
          ) : (
            <div className="flex items-center">
              <span className="text-xl">/</span>
              <span key={index}>
                <Link
                  className="mx-2 rounded-sm bg-blueHover_A0BCE0 px-2 py-1 font-popins capitalize text-white_FFFFFF"
                  to={BreadCrumPath}
                >
                  {name}
                </Link>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BreadCrum;
