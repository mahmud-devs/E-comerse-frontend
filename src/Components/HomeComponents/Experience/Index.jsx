import React, { useEffect, useState } from "react";
import ExperienceImg from "../../../assets/Experience.png";

const Experience = () => {
  const [time, settime] = useState(6 * 24 * 60 * 60 * 1000 || 0);
  //   useEffect(() => {
  //     setTimeout(() => {
  //       settime(time - 1000);
  //     }, 1000);
  //   }, [time]);

  useEffect(() => {
    const worker = new Worker(
      new URL("../../../CountDownWorker.js", import.meta.url),
    );
    worker.postMessage(time);
    worker.onmessage = (event) => {
      settime(event.data);
    };
  }, []);

  //   ================ formate the countdown date ============
  const formateDate = (milisecond) => {
    let total_second = parseInt(Math.floor(milisecond / 1000));
    let total_minutes = parseInt(Math.floor(total_second / 60));
    let total_hours = parseInt(Math.floor(total_minutes / 60));
    let days = parseInt(Math.floor(total_hours / 24));
    let seconds = parseInt(Math.floor(total_second % 60));
    let minutes = parseInt(Math.floor(total_minutes % 60));
    let hours = parseInt(Math.floor(total_hours % 24));
    return { days, seconds, minutes, hours };
  };

  const { days, seconds, minutes, hours } = formateDate(time);

  // console.log(days, seconds, minutes, hours);

  return (
    <div className="mb-[70px]">
      <div className="container">
        <div className="flex w-full items-center justify-between bg-textBlack_000000 px-[50px] py-[40px]">
          <div className="w-[40%]">
            <h3 className="mb-8 font-popins text-[16px] font-semibold text-greenButton_00FF66">
              Categories
            </h3>
            <h2 className="mb-8 pe-8 font-inter text-[48px] font-semibold leading-[60px] text-white_FAFAFA">
              Enhance Your Music Experience
            </h2>
            <div className="mb-[40px] flex cursor-pointer gap-x-6">
              <div className="flex h-[62px] w-[62px] flex-col items-center justify-center rounded-full bg-white_FFFFFF">
                <span className="font-popins text-[20px] font-semibold leading-5 text-textBlack_000000">
                  {days ? days : "00"}
                </span>
                <span className="leading-[18px font-popins text-[13px] font-medium capitalize text-textBlack_000000">
                  days
                </span>
              </div>

              <div className="flex h-[62px] w-[62px] flex-col items-center justify-center rounded-full bg-white_FFFFFF">
                <span className="font-popins text-[20px] font-semibold leading-5 text-textBlack_000000">
                  {hours ? hours : "00"}
                </span>
                <span className="leading-[18px font-popins text-[13px] font-medium capitalize text-textBlack_000000">
                  hours
                </span>
              </div>

              <div className="flex h-[62px] w-[62px] flex-col items-center justify-center rounded-full bg-white_FFFFFF">
                <span className="font-popins text-[20px] font-semibold leading-5 text-textBlack_000000">
                  {minutes ? minutes : "00"}
                </span>
                <span className="leading-[18px font-popins text-[13px] font-medium capitalize text-textBlack_000000">
                  minutes
                </span>
              </div>

              <div className="flex h-[62px] w-[62px] flex-col items-center justify-center rounded-full bg-white_FFFFFF">
                <span className="font-popins text-[20px] font-semibold leading-5 text-textBlack_000000">
                  {seconds ? seconds : "00"}
                </span>
                <span className="leading-[18px font-popins text-[13px] font-medium capitalize text-textBlack_000000">
                  seconds
                </span>
              </div>
            </div>

            <button className="me-4 rounded bg-greenButton_00FF66 px-12 py-4 font-popins text-[16px] font-medium capitalize text-white_FAFAFA transition-all hover:opacity-70">
              Buy now!
            </button>
          </div>
          <div className="flex w-[60%] items-center justify-end">
            <div className="ExperienceImg relative cursor-pointer">
              <img
                src={ExperienceImg}
                alt={ExperienceImg}
                className="relative object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
