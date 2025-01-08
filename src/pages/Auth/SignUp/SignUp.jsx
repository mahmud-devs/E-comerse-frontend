import React, { useState } from "react";
import BreadCrum from "../../../Components/CommonComponents/BreadCrum";
import { signUpValidationSchema } from "../../../Validation/Schema/LoginSchema";
import { useFormik } from "formik";
import { FaEye, FaEyeSlash, FaUser } from "react-icons/fa";
import { TfiBag } from "react-icons/tfi";
import { axiosInstance } from "../../../Helpers/axios";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const navigate = useNavigate()
  const [eye, setEye] = useState(false);
  const [loading, setloading] = useState(false);
  const initialValue = {
    email: "",
    phone: "",
    firstName: "",
    password: "",
    confirmPassword: "",
  };
  const [confirmPassword, setconfirmPassword] = useState(false);
  const formik = useFormik({
    initialValues: initialValue,
    validationSchema: signUpValidationSchema,
    onSubmit: async (value, { resetForm }) => {
      try {
        if (value.password !== value.confirmPassword) {
          setconfirmPassword(true);
          return;
        } else {
          setloading(true);
          setconfirmPassword(false);
          const responce = await axiosInstance.post("auth/registration", {
            firstName: value.firstName,
            email: value.email,
            mobile: value.phone,
            password: value.password,
          });
          console.log(responce);
        }
        resetForm();
      } catch (error) {
        console.log(error);
      } finally {
        setloading(false);
        
      }
    },
  });

  return (
    <div className="mb-[110px] mt-16">
      <div className="container">
        <div>
          <BreadCrum />
        </div>
        <div className="flex justify-center">
          <div className="backgroundImg hidden bg-cover lg:block lg:w-2/5"></div>

          <div className="mx-auto flex w-full max-w-3xl items-center p-8 lg:w-3/5 lg:px-12">
            <div className="w-full">
              <h1 className="text-2xl font-semibold capitalize tracking-wider text-textBlack_000000">
                Get your free account now.
              </h1>

              <p className="mt-4 text-gray-500">
                Let’s get you all set up so you can verify your personal account
                and begin setting up your profile.
              </p>

              <div className="mt-6">
                <h1 className="text-gray-500">Select type of account</h1>

                <div className="mt-3 md:-mx-2 md:flex md:items-center">
                  <button className="flex w-full items-center justify-center rounded-md border border-red_DB4444 px-6 py-3 capitalize text-red_DB4444 transition-all duration-200 hover:bg-red_DB4444 hover:text-white_FFFFFF focus:outline-none md:mx-2 md:w-auto">
                    <span className="text-xl">
                      <TfiBag />
                    </span>
                    <span className="mx-2">Buyer</span>
                  </button>

                  <button className="mt-4 flex w-full items-center justify-center rounded-md border border-red_DB4444 px-6 py-3 capitalize text-red_DB4444 transition-all duration-200 hover:bg-red_DB4444 hover:text-white_FFFFFF focus:outline-none md:mx-2 md:mt-0 md:w-auto">
                    <span className="text-xl">
                      <FaUser />
                    </span>
                    <span className="mx-2">Seller</span>
                  </button>
                </div>
              </div>

              <form
                className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2"
                onSubmit={
                  loading ? (e) => e.preventDefault() : formik.handleSubmit
                }
              >
                <div>
                  <label className="mb-2 block text-sm text-gray-600">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    name="firstName"
                    id="firstName"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                    className="mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-redHover_E07575 focus:outline-none focus:ring focus:ring-redHover_E07575 focus:ring-opacity-40"
                  />
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <span className="mt-4 block capitalize text-red_DB4444">
                      {formik.errors.firstName}
                    </span>
                  ) : null}
                </div>

                <div>
                  <label className="mb-2 block text-sm text-gray-600">
                    Phone number
                  </label>
                  <input
                    type="text"
                    placeholder="XXX-XX-XXXX-XXX"
                    name="phone"
                    id="phone"
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                    className="mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-redHover_E07575 focus:outline-none focus:ring focus:ring-redHover_E07575 focus:ring-opacity-40"
                  />
                  {formik.touched.phone && formik.errors.phone ? (
                    <span className="mt-4 block capitalize text-red_DB4444">
                      {formik.errors.phone}
                    </span>
                  ) : null}
                </div>

                <div>
                  <label className="mb-2 block text-sm text-gray-600">
                    Password
                  </label>
                  <div className="relative w-full">
                    <input
                      type={eye ? "text" : "password"}
                      placeholder="Enter your password"
                      name="password"
                      id="password"
                      onChange={formik.handleChange}
                      value={formik.values.password}
                      className="relative mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-redHover_E07575 focus:outline-none focus:ring focus:ring-redHover_E07575 focus:ring-opacity-40"
                    />

                    <span
                      className="absolute right-[7%] top-1/2 -translate-y-1/2"
                      onClick={() => setEye(!eye)}
                    >
                      {eye ? (
                        <FaEyeSlash className="cursor-pointer text-xl" />
                      ) : (
                        <FaEye className="cursor-pointer text-xl" />
                      )}
                    </span>
                  </div>

                  {formik.touched.password && formik.errors.password ? (
                    <span className="mt-4 block capitalize text-red_DB4444">
                      {formik.errors.password}
                    </span>
                  ) : null}
                </div>

                <div>
                  <label className="mb-2 block text-sm text-gray-600">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="johnsnow@example.com"
                    name="email"
                    id="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    className="mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-redHover_E07575 focus:outline-none focus:ring focus:ring-redHover_E07575 focus:ring-opacity-40"
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <span className="mt-4 block capitalize text-red_DB4444">
                      {formik.errors.email}
                    </span>
                  ) : null}
                </div>

                

                <div>
                  <label className="mb-2 block text-sm text-gray-600">
                    Confirm password
                  </label>
                  <div className="relative w-full">
                    <input
                      type={eye ? "text" : "password"}
                      name="confirmPassword"
                      id="confirmPassword"
                      onChange={formik.handleChange}
                      value={formik.values.confirmPassword}
                      placeholder="Enter your password"
                      className="mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-redHover_E07575 focus:outline-none focus:ring focus:ring-redHover_E07575 focus:ring-opacity-40"
                    />
                    <span
                      className="absolute right-[7%] top-1/2 -translate-y-1/2"
                      onClick={() => setEye(!eye)}
                    >
                      {eye ? (
                        <FaEyeSlash className="cursor-pointer text-xl" />
                      ) : (
                        <FaEye className="cursor-pointer text-xl" />
                      )}
                    </span>
                  </div>

                  {confirmPassword ? (
                    <span className="mt-4 block capitalize text-red_DB4444">
                      Password does not match
                    </span>
                  ) : (
                    ""
                  )}
                </div>

                <div className="flex items-start">
                  {loading ? (
                    <button className="relative mt-[25px] flex w-full items-center justify-center rounded-md bg-blueHover_A0BCE0 py-4 text-sm capitalize text-white duration-300 hover:opacity-80">
                      Loading
                      <span className="absolute left-[30%] top-[23%] h-7 w-7 animate-spin rounded-full border-4 border-textBlack_000000 border-b-white_FFFFFF border-l-white_FFFFFF"></span>
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="mt-[25px] flex w-full items-center justify-center rounded-md bg-red_DB4444 py-4 text-sm capitalize text-white duration-300 hover:bg-redHover_E07575"
                    >
                      Sign Up
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
