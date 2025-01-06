import React from "react";

const Input = ({
  widtfull = false,
  label,
  placeholder,
  id,
  ispassword = false,
  ismarginRequired = true,
}) => {
  return (
    <div
      className={
        ismarginRequired
          ? "mb-10 flex flex-col gap-y-2"
          : "flex flex-col gap-y-2"
      }
    >
      <label htmlFor="FirstName" className="acountStyle text-[16px]">
        {label}
      </label>
      <input
        type={ispassword ? "password" : "text"}
        className={
          widtfull
            ? "w-[903px] rounded bg-white_F5F5F5 px-3 py-3"
            : "w-[430px] rounded bg-white_F5F5F5 px-3 py-3"
        }
        id={id}
        name={id}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
