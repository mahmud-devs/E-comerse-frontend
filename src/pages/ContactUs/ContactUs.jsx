import React from "react";
import BreadCrum from "../../Components/CommonComponents/BreadCrum";
import { useFormik } from "formik";
import { IoCallOutline } from "react-icons/io5";
import { contactValidationSchema } from "../../Validation/Schema/LoginSchema";

const ContactUs = () => {
  const initialValue = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };
  const formik = useFormik({
    initialValues: initialValue,
    validationSchema: contactValidationSchema,
    onSubmit: (value) => {
      console.log(value);
    },
  });
  return (
    <div className="mb-20">
      <div className="container">
        <BreadCrum />
        <div className="mt-10 flex w-full gap-x-10">
          <div className="w-[25%] rounded-lg px-10 py-10 shadow-2xl">
            <div className="border-b border-[#646161] pb-10">
              <div className="flex items-center gap-x-4">
                <IoCallOutline className="h-10 w-10 rounded-full bg-red_DB4444 p-2 text-xl text-white" />
                <h2 className="font-popins text-[16px] font-medium text-textBlack_000000">
                  Call To Us
                </h2>
              </div>
              <h2 className="mt-6 font-popins text-[14px] font-normal text-textBlack_000000">
                We are available 24/7, 7 days a week.
              </h2>
              <a
                href="callto:+8801611112222"
                className="mt-4 font-popins text-[14px] font-normal text-textBlack_000000"
              >
                Phone: +8801611112222
              </a>
            </div>

            <div className="mt-10">
              <div className="flex items-center gap-x-4">
                <IoCallOutline className="h-10 w-10 rounded-full bg-red_DB4444 p-2 text-xl text-white" />
                <h2 className="font-popins text-[16px] font-medium text-textBlack_000000">
                  Write To US
                </h2>
              </div>
              <h3 className="mt-6 font-popins text-[15px] font-normal text-textBlack_000000">
                Fill out our form and we will contact you within 24 hours.
              </h3>
              <a
                href="mailto:customer@exclusive.com"
                className="mt-4 font-popins text-[15px] font-normal text-textBlack_000000"
              >
                Emails: customer@exclusive.com
              </a>
              <a
                href="mailto:support@exclusive.com"
                className="mt-4 font-popins text-[15px] font-normal text-textBlack_000000"
              >
                Emails: support@exclusive.com
              </a>
            </div>
          </div>
          {/* ============================================================== */}
          <div className="w-[75%]">
            <div className="w-full rounded-lg bg-white p-8 shadow-2xl">
              <form className="space-y-6" onSubmit={formik.handleSubmit}>
                <div className="flex items-start justify-between">
                  <div className="mb-4">
                    <input
                      type={"text"}
                      className={"w-[250px] rounded bg-white_F5F5F5 px-3 py-3"}
                      placeholder={"Your Name *"}
                      id="name"
                      name="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                    />

                    {formik.touched.name && formik.errors.name ? (
                      <span className="mt-4 block capitalize text-red_DB4444">
                        {formik.errors.name}
                      </span>
                    ) : null}
                  </div>

                  <div className="mb-4">
                    <input
                      type="text"
                      className={"w-[250px] rounded bg-white_F5F5F5 px-3 py-3"}
                      placeholder={"Your email *"}
                      id="email"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <span className="mt-4 block capitalize text-red_DB4444">
                        {formik.errors.email}
                      </span>
                    ) : null}
                  </div>

                  <div className="mb-4">
                    <input
                      type={"text"}
                      className={
                        "m w-[250px] rounded bg-white_F5F5F5 px-3 py-3"
                      }
                      placeholder={"Your phone *"}
                      id="phone"
                      name="phone"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.phone && formik.touched.phone ? (
                      <div className="mt-2 text-red-500">
                        {formik.errors.phone}
                      </div>
                    ) : null}
                  </div>
                </div>

                {/* ==================== */}
                <div>
                  <textarea
                    rows="12"
                    className="mt-1 block w-full rounded-md border-gray-300 bg-white_F5F5F5 pl-4 pt-4 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                    placeholder="Your Message"
                    id="message"
                    name="message"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                  ></textarea>
                  {formik.touched.message && formik.errors.message ? (
                    <div className="mt-2 text-red-500">
                      {formik.errors.message}
                    </div>
                  ) : null}
                </div>

                <div className="text-right">
                  <button className="inline-flex items-center rounded-md bg-red-500 px-10 py-4 text-sm font-medium text-white shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
