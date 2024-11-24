import React, { useEffect, useState } from "react";
import { IoEllipsisVerticalSharp } from "react-icons/io5";

const Timer = () => {
  const [time, settime] = useState(4 * 24 * 60 * 60 * 1000);
  //   useEffect(() => {
  //     setTimeout(() => {
  //       settime(time - 1000);
  //     }, 1000);
  //   }, [time]);

  useEffect(() => {
    const worker = new Worker(
      new URL("../../CountDownWorker.js", import.meta.url),
    );
    worker.postMessage(time);
    worker.onmessage = (event)=>{
        settime(event.data)
    }
  },[]);

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

  //   console.log(days, seconds, minutes, hours);

  return (
    <div>
      <div className="flex gap-x-4">
        <div className="flex flex-col gap-y-1">
          <span className="font-popins text-[12px] font-semibold text-textBlack_000000">
            Days
          </span>
          <div className="flex items-center gap-x-4">
            <span className="font-inter text-[32px] font-bold leading-[32px] text-textBlack_000000">
              {days < 10 ? `0${days}` : days ? days : "00"}
            </span>
            <span className="text-2xl text-red_DB4444">
              <IoEllipsisVerticalSharp />
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-y-1">
          <span className="font-popins text-[12px] font-semibold text-textBlack_000000">
            Hours
          </span>
          <div className="flex items-center gap-x-4">
            <span className="font-inter text-[32px] font-bold leading-[32px] text-textBlack_000000">
              {hours ? hours : "00"}
            </span>
            <span className="text-2xl text-red_DB4444">
              <IoEllipsisVerticalSharp />
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-y-1">
          <span className="font-popins text-[12px] font-semibold text-textBlack_000000">
            Minutes
          </span>
          <div className="flex items-center gap-x-4">
            <span className="font-inter text-[32px] font-bold leading-[32px] text-textBlack_000000">
              {minutes ? minutes : "00"}
            </span>
            <span className="text-2xl text-red_DB4444">
              <IoEllipsisVerticalSharp />
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-y-1">
          <span className="font-popins text-[12px] font-semibold text-textBlack_000000">
            Seconds
          </span>
          <div className="flex items-center gap-x-4">
            <span className="font-inter text-[32px] font-bold leading-[32px] text-textBlack_000000">
              {seconds ? seconds : "00"}
            </span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
