import React, { useState } from "react";
import { Link } from "react-router-dom";
import { number } from "yup";

const CheakOut = () => {
  const [dataField, setDataField] = useState([
    "address1",
    "address2",
    "town",
    "district",
    "postalcode",
  ]);

  const [userField, setuserField] = useState(["firstName", "email", "mobile"]);

  const [userinfo, setUserinfo] = useState({
    firstName: "John",
    email: "john.doe@example.com",
    mobile: "1234567890",
    address1: "123 Main St",
    address2: "Apt 4B",
    town: "Springfield",
    district: "Central",
    postalcode: "12345",
    country: "USA",
  });

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

              <form className="lg:mt-16" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <h2 className="text-xl font-bold text-gray-800">
                    Shipping info
                  </h2>

                  <div className="mt-8 grid gap-x-8 gap-y-10 sm:grid-cols-2">
                    {userField.map((item) => (
                      <div>
                        <label className="mb-2 inline-block font-popins text-[20px] font-bold capitalize text-blue-600">
                          {item}
                        </label>
                        <input
                          type={
                            item == "mobile"
                              ? "number"
                              : item == "email"
                                ? "email"
                                : "text"
                          }
                          name={item}
                          value={userinfo[item]}
                          onChange={handleChange}
                          onFocus={(e) => (e.target.value = "")}
                          placeholder={item}
                          className="w-full border-b rounded-t-lg bg-white px-2 py-3 pb-2 text-sm text-gray-800 outline-none focus:border-blue-600 focus:bg-gray-100"
                        />
                      </div>
                    ))}
                    {dataField.map((item) => (
                      <div>
                        <label className="mb-2 inline-block font-popins text-[20px] font-bold capitalize text-blue-600">
                          {item}
                        </label>
                        <input
                          type={item == "postalcode" ? "number" : "text"}
                          name={item}
                          placeholder={item}
                          value={userinfo[item]}
                          onChange={handleChange}
                          onFocus={(e) => (e.target.value = "")}
                          className="w-full border-b rounded-t-lg bg-white px-2 py-3 pb-2 text-sm text-gray-800 outline-none focus:border-blue-600 focus:bg-gray-100"
                        />
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
                      <label for="card" className="flex cursor-pointer gap-2">
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
                      </label>
                    </div>

                    <div className="flex items-center">
                      <button
                        type="button"
                        className="rounded-lg border border-current bg-red-700 px-5 py-2.5 text-sm font-medium tracking-wider text-white outline-none hover:bg-orange-800 active:bg-orange-700"
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
                    type="button"
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
                  <h2 className="text-xl font-bold text-gray-800">
                    Order Summary
                  </h2>

                  <div className="mt-8 space-y-6">
                    <div className="flex gap-4">
                      <div className="flex h-[100px] w-[124px] shrink-0 items-center justify-center rounded-lg bg-gray-200 p-4">
                        <img
                          src="https://readymadeui.com/images/product10.webp"
                          className="w-full object-contain"
                        />
                      </div>

                      <div className="w-full">
                        <h3 className="text-sm font-bold text-gray-800">
                          Naruto: Split Sneakers
                        </h3>
                        <ul className="mt-2 space-y-1 text-xs text-gray-800">
                          <li className="flex flex-wrap gap-4">
                            Size <span className="ml-auto">37</span>
                          </li>
                          <li className="flex flex-wrap gap-4">
                            Quantity <span className="ml-auto">2</span>
                          </li>
                          <li className="flex flex-wrap gap-4">
                            Total Price <span className="ml-auto">$40</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex h-[100px] w-[124px] shrink-0 items-center justify-center rounded-lg bg-gray-200 p-4">
                        <img
                          src="https://readymadeui.com/images/product11.webp"
                          className="w-full object-contain"
                        />
                      </div>

                      <div className="w-full">
                        <h3 className="text-sm font-bold text-gray-800">
                          VelvetGlide Boots
                        </h3>
                        <ul className="mt-2 space-y-1 text-xs text-gray-800">
                          <li>
                            Size <span className="float-right">37</span>
                          </li>
                          <li>
                            Quantity <span className="float-right">2</span>
                          </li>
                          <li>
                            Total Price <span className="float-right">$40</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex h-[100px] w-[124px] shrink-0 items-center justify-center rounded-lg bg-gray-200 p-4">
                        <img
                          src="https://readymadeui.com/images/product14.webp"
                          className="w-full object-contain"
                        />
                      </div>

                      <div className="w-full">
                        <h3 className="text-sm font-bold text-gray-800">
                          Echo Elegance
                        </h3>
                        <ul className="mt-2 space-y-1 text-xs text-gray-800">
                          <li>
                            Size <span className="float-right">37</span>
                          </li>
                          <li>
                            Quantity <span className="float-right">2</span>
                          </li>
                          <li>
                            Total Price <span className="float-right">$40</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex h-[100px] w-[124px] shrink-0 items-center justify-center rounded-lg bg-gray-200 p-4">
                        <img
                          src="https://readymadeui.com/images/product12.webp"
                          className="w-full object-contain"
                        />
                      </div>

                      <div className="w-full">
                        <h3 className="text-sm font-bold text-gray-800">
                          Naruto: Split Sneakers
                        </h3>
                        <ul className="mt-2 space-y-1 text-xs text-gray-800">
                          <li className="flex flex-wrap gap-4">
                            Size <span className="ml-auto">37</span>
                          </li>
                          <li className="flex flex-wrap gap-4">
                            Quantity <span className="ml-auto">2</span>
                          </li>
                          <li className="flex flex-wrap gap-4">
                            Total Price <span className="ml-auto">$40</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex h-[100px] w-[124px] shrink-0 items-center justify-center rounded-lg bg-gray-200 p-4">
                        <img
                          src="https://readymadeui.com/images/product9.webp"
                          className="w-full object-contain"
                        />
                      </div>

                      <div className="w-full">
                        <h3 className="text-sm font-bold text-gray-800">
                          VelvetGlide Boots
                        </h3>
                        <ul className="mt-2 space-y-1 text-xs text-gray-800">
                          <li>
                            Size <span className="float-right">37</span>
                          </li>
                          <li>
                            Quantity <span className="float-right">2</span>
                          </li>
                          <li>
                            Total Price <span className="float-right">$40</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full bg-gray-200 p-4 lg:absolute lg:bottom-0 lg:left-0">
                  <h4 className="flex flex-wrap gap-4 text-sm font-bold text-gray-800">
                    Total <span className="ml-auto">$240.00</span>
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
