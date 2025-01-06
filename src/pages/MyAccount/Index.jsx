import React from "react";
import BreadCrum from "../../Components/CommonComponents/BreadCrum";
import Input from "../../Components/CommonComponents/Input";

const MyAccount = () => {
  return (
    <div className="mb-[140px]">
      <div className="container">
        <div className="mb-20">
          <BreadCrum />
        </div>

        <div className="flex">
          <div className="w-[30%]">
            <div>
              <h1 className="accountStyle text-[16px] font-medium">
                Manage My Account
              </h1>
              <ul className="accountStyle ml-6 mt-4 flex flex-col items-start gap-y-2 text-[16px] opacity-50">
                <li className="cursor-pointer hover:text-red_DB4444 hover:opacity-100">
                  My Profile
                </li>
                <li className="cursor-pointer hover:text-red_DB4444 hover:opacity-100">
                  Address Book
                </li>
                <li className="cursor-pointer hover:text-red_DB4444 hover:opacity-100">
                  My Payment Options
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <h1 className="accountStyle text-[16px] font-medium">
                My Orders
              </h1>
              <ul className="accountStyle ml-6 mt-4 flex flex-col items-start gap-y-2 text-[16px] opacity-50">
                <li className="cursor-pointer hover:text-red_DB4444 hover:opacity-100">
                  My Returns
                </li>
                <li className="cursor-pointer hover:text-red_DB4444 hover:opacity-100">
                  My Cancellations
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <h1 className="accountStyle text-[16px] font-medium">
                My WishList
              </h1>
            </div>
          </div>

          <div className="w-full px-14 pb-10 shadow-lg">
            <h1 className="accountStyle mb-4 text-[20px] font-medium text-red_DB4444">
              Edit Your Profile
            </h1>

            <div className="flex flex-wrap justify-between">
              <Input
                widtfull={false}
                label={"First Name"}
                placeholder={"Robert"}
                id={"firstName"}
              />
              <Input
                widtfull={false}
                label={"Last Name"}
                placeholder={"Smith"}
                id={"lastName"}
              />

              <Input
                widtfull={false}
                label={"Email"}
                placeholder={"duwuxetujy@gmail.com"}
                id={"email"}
              />

              <Input
                widtfull={false}
                label={"password"}
                placeholder={"PassW0#D"}
                id={"password"}
                ispassword={true}
              />
            </div>

            <div>
              <h2 className="accountStyle my-5 text-[16px]">
                Password Changes
              </h2>
              <div className="flex flex-col gap-y-5">
                <Input
                  widtfull={true}
                  label={"Current Passwod"}
                  placeholder={"PassW0#D"}
                  id={"currentPassword"}
                  ispassword={true}
                  ismarginRequired={false}
                />

                <Input
                  widtfull={true}
                  label={"New Passwod"}
                  placeholder={"PassW0#D"}
                  id={"currentPassword"}
                  ispassword={true}
                  ismarginRequired={false}
                />

                <Input
                  widtfull={true}
                  label={"Confrim New  Passwod"}
                  placeholder={"PassW0#D"}
                  id={"currentPassword"}
                  ispassword={true}
                  ismarginRequired={false}
                />
              </div>

              <div className="mt-6 flex max-w-[905px] justify-end">
                <div className="flex items-center gap-x-6">
                  <h2 className="accountStyle">Cancel</h2>
                  <button className="rounded bg-red_DB4444 px-[48px] py-[12px] font-popins text-[18px] font-medium text-white_FFFFFF">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
