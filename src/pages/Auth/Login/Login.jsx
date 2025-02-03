import React, { useState } from "react";
import loginImage from "../../../assets/Login/login.gif";
import { loginValidationSchema } from "../../../Validation/Schema/LoginSchema";
import { useFormik } from "formik";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { axiosInstance } from "../../../Helpers/axios";
import { useNavigate } from "react-router-dom";
import { successToast, errorToast } from "../../../Helpers/toast";
const Login = () => {
  const navigate = useNavigate();
  const [eye, setEye] = useState(false);
  const initialValue = {
    emailorphone: "",
    Password: "",
  };
  const formik = useFormik({
    initialValues: initialValue,
    validationSchema: loginValidationSchema,
    onSubmit: async (value) => {
      try {
        const loginData = await axiosInstance.post("auth/login", {
          emailormobile: value.emailorphone,
          password: value.Password,
        });
        if (loginData?.data?.success === true) {
          successToast("Login Successful");
          navigate("/home");
        } else {
          errorToast("Failed to login");
        }
      } catch (error) {
        console.log("error from login page", error);
        errorToast("Failed to login");
      }
    },
  });
  return (
    <div className="my-[20px]">
      <div className="container">
        <div className="flex items-center">
          <div className="flex w-1/2 items-center justify-center">
            <img
              src={loginImage}
              alt={loginImage}
              className="w-full object-cover"
            />
          </div>
          {/* ================================== */}
          <div className="w-1/2 ps-[120px]">
            <div className="flex flex-col gap-y-4">
              <h2 className="font-inter text-[36px] font-medium text-textBlack_000000">
                Log in to Exclusive
              </h2>
              <p className="font-popins text-[16px] font-normal text-textBlack_000000">
                Enter your details below
              </p>
              <form action="" onSubmit={formik.handleSubmit}>
                <input
                  type="text"
                  name="emailorphone"
                  id="emailorphone"
                  placeholder="Email or Phone Number"
                  className="w-[70%] border-b-2 border-b-gray-200 px-5 py-3"
                  onChange={formik.handleChange}
                  value={formik.values.emailorphone}
                />
                {formik.touched.emailorphone && formik.errors.emailorphone ? (
                  <span className="mt-4 block text-red_DB4444">
                    {formik.errors.emailorphone}
                  </span>
                ) : null}

                <div className="relative">
                  <div className="relative">
                    <input
                      type={eye ? "text" : "password"}
                      name="Password"
                      id="Password"
                      placeholder="Password"
                      className="w-[70%] border-b-2 border-b-gray-200 px-5 py-3"
                      onChange={formik.handleChange}
                      value={formik.values.Password}
                    />
                    <span
                      className="absolute right-[35%] top-1/2 -translate-y-1/2"
                      onClick={() => setEye(!eye)}
                    >
                      {eye ? (
                        <FaEyeSlash className="cursor-pointer text-xl" />
                      ) : (
                        <FaEye className="cursor-pointer text-xl" />
                      )}
                    </span>
                  </div>
                  {formik.touched.Password && formik.errors.Password ? (
                    <span className="mt-4 block text-red_DB4444">
                      {formik.errors.Password}
                    </span>
                  ) : null}
                </div>

                <div className="mt-[30px] flex items-center gap-x-[110px]">
                  <button
                    type="submit"
                    className="cursor-pointer rounded bg-red_DB4444 px-[48px] py-4 font-popins text-[16px] font-medium text-white_FFFFFF transition-all duration-200 hover:opacity-80"
                  >
                    Log In
                  </button>
                  <span className="cursor-pointer font-popins text-[16px] font-medium text-red_DB4444">
                    Forget Password?
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
