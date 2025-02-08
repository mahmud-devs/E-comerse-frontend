import React, { useState } from "react";
import { Link } from "react-router-dom";
import { number } from "yup";
import { useGetuserCartItemQuery } from "../../Features/Api/ExcluciveApi";
import { useFormik } from "formik";
import { checkOutValidationSchema } from "../../Validation/Schema/LoginSchema";
import { axiosInstance } from "../../Helpers/axios";
import { successToast } from "../../Helpers/toast";
const CheakOut = () => {
  const [dataField, setDataField] = useState([
    "firstName",
    "email",
    "mobile",
    "address1",
    "address2",
    "town",
    "district",
    "postalcode",
  ]);

  // =================== formlink validation =====================
  // ========== get user data from local storage===========

  const userDataFromLocalStorage = JSON.parse(localStorage.getItem("user"));

  const formik = useFormik({
    initialValues: {
      userinfo: {
        firstName: userDataFromLocalStorage?.firstName,
        email: userDataFromLocalStorage?.email,
        mobile: userDataFromLocalStorage?.mobile,
        address1: "",
        address2: "",
        town: "",
        district: "",
        postalcode: "",
        payementmethod: "",
      },
    },
    validationSchema: checkOutValidationSchema,
    onSubmit: async (values) => {
      try {
        console.log("Form Submitted", values.userinfo);

        const response = await axiosInstance.post(
          "/placeorder",
          {
            customerinfo: {
              address1: values?.userinfo?.address1,
              address2: values?.userinfo?.address2,
              town: values?.userinfo?.town,
              district: values?.userinfo?.district,
              postalcode: values?.userinfo?.postalcode || 12345,
            },
            paymentinfo: {
              payementmethod: values?.userinfo?.payementmethod || "online",
            },
          },
          {
            withCredentials: "include",
          },
        );
        console.log();
        if (response?.data?.paymentgateway) {
          window.location.href = response?.data?.paymentgateway;
        } else {
          successToast("Successfully placed your order");
        }
      } catch (error) {
        console.log("error from check out formlink onSubmit", error);
      }
    },
  });

  // ============== payment method online
  const handleOnlinePayment = () => {
    formik.setFieldValue("userinfo.payementmethod", "online");
  };

  // ============== payment method cash
  const handleCashPayment = () => {
    formik.setFieldValue("userinfo.payementmethod", "cash");
  };

  // ============== get cart data ==================
  const { isLoading, isError, data } = useGetuserCartItemQuery();
  const getCartItem = data?.data;
  // console.log(getCartItem);

  //==========================   handleChange input

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserinfo({
      ...userinfo,
      [name]: value,
    });
  };

  return (
    <div className="container my-10">
      <div className="bg-white font-popins">
        <div className="mx-auto w-full max-lg:max-w-xl">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="mx-auto w-full max-w-4xl p-6 !pr-0 max-lg:order-1 lg:col-span-2">
              <div className="text-center max-lg:hidden">
                <h2 className="inline-block border-b-2 border-gray-800 pb-1 text-3xl font-bold text-gray-800">
                  Checkout
                </h2>
              </div>

              <form className="lg:mt-16" onSubmit={formik.handleSubmit}>
                <div>
                  <h2 className="text-xl font-bold text-gray-800">
                    Shipping info
                  </h2>

                  <div className="mt-8 grid gap-x-8 gap-y-10 sm:grid-cols-2">
                    {dataField.map((item) => (
                      <div>
                        <label className="mb-2 inline-block font-popins text-[20px] font-bold capitalize text-blue-600">
                          {item}
                        </label>
                        <input
                          type={
                            item == "mobile"
                              ? "number"
                              : item === "email"
                                ? "email"
                                : item === "postalcode"
                                  ? "number"
                                  : "text"
                          }
                          name={`userinfo.${item}`}
                          // `userinfo.${item}`
                          placeholder={item}
                          value={formik.values.userinfo[item]}
                          onChange={formik.handleChange}
                          className="w-full rounded-t-lg border-b bg-white px-2 py-3 pb-2 text-sm text-gray-800 outline-none focus:border-blue-600 focus:bg-gray-100"
                        />

                        {formik.touched.userinfo?.[item] &&
                          formik.errors.userinfo?.[item] && (
                            <span className="mt-2 block text-red-500">
                              {formik.errors.userinfo[item]}
                            </span>
                          )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-16">
                  <h2 className="text-xl font-bold text-gray-800">
                    Payment method
                  </h2>

                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <div className="flex items-center">
                      {formik.values.userinfo.payementmethod === "online" ? (
                        <div className="text-md cursor-pointer rounded-lg bg-green-600 px-4 py-3 text-white hover:bg-green-700">
                          Payment Method Online
                        </div>
                      ) : (
                        <button
                          onClick={handleOnlinePayment}
                          for="card"
                          className="flex cursor-pointer gap-2"
                        >
                          <img
                            src="https://readymadeui.com/images/visa.webp"
                            className="w-12"
                            alt="card1"
                          />
                          <img
                            src="https://readymadeui.com/images/american-express.webp"
                            className="w-12"
                            alt="card2"
                          />
                          <img
                            src="https://readymadeui.com/images/master.webp"
                            className="w-12"
                            alt="card3"
                          />
                        </button>
                      )}
                    </div>

                    <div className="flex items-center">
                      <button
                        type="button"
                        onClick={handleCashPayment}
                        className={
                          formik.values.userinfo.payementmethod === "cash"
                            ? "rounded-lg border border-current bg-green-600 px-5 py-2.5 text-sm font-medium tracking-wider text-white outline-none hover:bg-green-800 active:bg-green-700"
                            : "rounded-lg border border-current bg-red-700 px-5 py-2.5 text-sm font-medium tracking-wider text-white outline-none hover:bg-orange-800 active:bg-orange-700"
                        }
                      >
                        Cash On Delivery
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    to={"/cart"}
                    className="flex min-w-[150px] items-center justify-center rounded-lg bg-gray-200 px-6 py-3.5 text-sm text-gray-800 hover:bg-gray-300"
                  >
                    Back
                  </Link>
                  <button
                    type="submit"
                    className="min-w-[150px] rounded-lg bg-blue-600 px-6 py-3.5 text-sm text-white hover:bg-blue-700"
                  >
                    Confirm payment $240
                  </button>
                </div>
              </form>
            </div>

            {/* ========================== product ======================================= */}

            <div className="w-full bg-gray-100 lg:sticky lg:top-0 lg:ml-auto lg:h-screen lg:max-w-[430px]">
              <div className="relative h-full">
                <div className="overflow-auto p-6 max-lg:max-h-[450px] lg:h-[calc(100vh-50px)]">
                  <h2 className="mt-4 text-xl font-bold text-gray-800">
                    Order Summary
                  </h2>

                  <div className="mt-8 space-y-6">
                    {getCartItem?.cartITem?.map((item) => (
                      <div className="flex gap-4" key={item}>
                        <div className="flex h-[100px] w-[124px] shrink-0 items-center justify-center rounded-lg">
                          <img
                            src={item?.product.image[0]}
                            alt={item?.product.image[0]}
                            className="w-full object-contain"
                          />
                        </div>

                        <div className="w-full">
                          <h3 className="text-sm font-bold text-gray-800">
                            {item?.product?.name}
                          </h3>
                          <ul className="mt-2 space-y-1 text-xs text-gray-800">
                            <li className="flex flex-wrap gap-4">
                              Size <span className="ml-auto">{item?.size}</span>
                            </li>
                            <li className="flex flex-wrap gap-4">
                              Quantity{" "}
                              <span className="ml-auto">{item?.quantity}</span>
                            </li>
                            <li className="flex flex-wrap gap-4">
                              Total Price{" "}
                              <span className="ml-auto">
                                ${item?.product?.price * item?.quantity}
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="w-full bg-gray-200 p-4 lg:absolute lg:bottom-0 lg:left-0">
                  <h4 className="flex flex-wrap gap-4 text-sm font-bold text-gray-800">
                    Total{" "}
                    <span className="ml-auto">
                      $ {getCartItem?.totalamount}
                    </span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheakOut;
