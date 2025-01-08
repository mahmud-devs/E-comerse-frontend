import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { axiosInstance } from "../../Helpers/axios";
const OtpVerify = () => {
  const parms = useParams();
  const navigate = useNavigate();
  const [otp, setotp] = useState("");

  const handleinput = (num) => {
    setotp((prev) => {
      if (otp.length > 4) {
        console.log("sdkljf");
        return prev; // Return the current state to avoid updates
      } else {
        return prev + num.toString();
      }
    });
  };

  //   ================== backspace ====================

  const handleBackspace = () => {
    setotp((prev) => prev.slice(0, -1));
  };

  // ==================================
  useEffect(() => {}, [otp]);

  const handleOpt = (e) => {
    const value = e.target.value;

    if (/^\d*$/.test(value) && value.length <= 5) {
      setotp(value);
    }
  };

  // handleSubmitOpt
  const handleSubmitOpt = async () => {
    try {
      const otpverify = await axiosInstance.post("auth/verify-otp", {
        emailormobile: parms.email,
        otp: otp,
      });
    } catch (error) {
      console.error("error from optverify page", error);
    } finally {
      setotp("");
      navigate("/login");
    }
  };

  return (
    <div>
      <div className="flex h-screen w-full items-center justify-center bg-blue-200">
        <div className="container h-screen max-w-full overflow-hidden shadow-lg">
          <div className="flex flex-col">
            <div className="flex h-48 w-full flex-col justify-center">
              <div className="block w-full text-center text-3xl text-blue-500">
                Verification Code
              </div>
              <div className="font-base block w-full pt-2 text-center text-sm text-blue-500">
                Please type the verification code sent to
                <br />
                {parms.email}
              </div>
            </div>
            <div className="flex h-screen w-full flex-1 items-center justify-center text-blue-800">
              <div className="h-full px-8 py-1 text-center">
                <div className="w-full max-w-sm">
                  <div className="mt-1 flex items-center border-b-2 border-purple-500 py-2">
                    <input
                      className="mr-3 w-full appearance-none border-none bg-transparent px-2 py-1 text-center text-3xl leading-tight text-black focus:outline-none"
                      type="text"
                      placeholder="Enter Code here"
                      value={otp}
                      onChange={handleOpt}
                    />
                  </div>
                  <div className="font-base my-10 text-center text-xs">
                    <div className="px-2">
                      <div className="flex text-3xl">
                        <div
                          className="my-auto w-1/3 cursor-pointer rounded px-2 py-2 hover:bg-white hover:text-black"
                          onClick={() => handleinput(1)}
                        >
                          1
                        </div>
                        <div
                          className="my-auto w-1/3 cursor-pointer rounded px-2 py-2 hover:bg-white hover:text-black"
                          onClick={() => handleinput(2)}
                        >
                          2
                        </div>
                        <div
                          className="my-auto w-1/3 cursor-pointer rounded px-2 py-2 hover:bg-white hover:text-black"
                          onClick={() => handleinput(3)}
                        >
                          3
                        </div>
                      </div>
                    </div>

                    <div className="px-2 pt-6">
                      <div className="-mx-2 flex text-3xl">
                        <div
                          className="my-auto w-1/3 cursor-pointer rounded px-2 py-2 hover:bg-white hover:text-black"
                          onClick={() => handleinput(4)}
                        >
                          4
                        </div>
                        <div
                          className="my-auto w-1/3 cursor-pointer rounded px-2 py-2 hover:bg-white hover:text-black"
                          onClick={() => handleinput(5)}
                        >
                          5
                        </div>
                        <div
                          className="my-auto w-1/3 cursor-pointer rounded px-2 py-2 hover:bg-white hover:text-black"
                          onClick={() => handleinput(6)}
                        >
                          6
                        </div>
                      </div>
                    </div>

                    <div className="px-2 pt-6">
                      <div className="-mx-2 flex text-3xl">
                        <div
                          className="my-auto w-1/3 cursor-pointer rounded px-2 py-2 hover:bg-white hover:text-black"
                          onClick={() => handleinput(7)}
                        >
                          7
                        </div>
                        <div
                          className="my-auto w-1/3 cursor-pointer rounded px-2 py-2 hover:bg-white hover:text-black"
                          onClick={() => handleinput(8)}
                        >
                          8
                        </div>
                        <div
                          className="my-auto w-1/3 cursor-pointer rounded px-2 py-2 hover:bg-white hover:text-black"
                          onClick={() => handleinput(9)}
                        >
                          9
                        </div>
                      </div>
                    </div>

                    <div className="px-2 pt-6">
                      <div className="-mx-2 flex text-3xl">
                        <div className="my-auto w-1/3 cursor-pointer rounded px-2 py-2 hover:bg-white hover:text-black">
                          <div className="px-10 py-2" onClick={handleBackspace}>
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              stroke-width="0"
                              viewBox="0 0 640 512"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M576 64H205.26A63.97 63.97 0 0 0 160 82.75L9.37 233.37c-12.5 12.5-12.5 32.76 0 45.25L160 429.25c12 12 28.28 18.75 45.25 18.75H576c35.35 0 64-28.65 64-64V128c0-35.35-28.65-64-64-64zm-84.69 254.06c6.25 6.25 6.25 16.38 0 22.63l-22.62 22.62c-6.25 6.25-16.38 6.25-22.63 0L384 301.25l-62.06 62.06c-6.25 6.25-16.38 6.25-22.63 0l-22.62-22.62c-6.25-6.25-6.25-16.38 0-22.63L338.75 256l-62.06-62.06c-6.25-6.25-6.25-16.38 0-22.63l22.62-22.62c6.25-6.25 16.38-6.25 22.63 0L384 210.75l62.06-62.06c6.25-6.25 16.38-6.25 22.63 0l22.62 22.62c6.25 6.25 6.25 16.38 0 22.63L429.25 256l62.06 62.06z"></path>
                            </svg>
                          </div>
                        </div>

                        <div
                          className="my-auto w-1/3 cursor-pointer rounded px-2 py-2 hover:bg-white hover:text-black"
                          onClick={() => handleinput(0)}
                        >
                          0
                        </div>

                        <div
                          className="my-auto w-1/3 cursor-pointer rounded px-2 py-2 hover:bg-green-500"
                          onClick={handleSubmitOpt}
                        >
                          <div className="px-10 py-2">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              stroke-width="0"
                              viewBox="0 0 512 512"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a className="cursor-pointer text-center text-red-500">
                    Resend Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpVerify;
