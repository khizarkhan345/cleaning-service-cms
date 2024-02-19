import React from "react";

const SignUp = () => {
  return (
    <div>
      <div className="w-[100%] h-[150px] bg-white border-b-[2px] dark:border-gray-700">
        <h1 className="text-[40px] font-bold pl-[60px] py-[45px]">
          Cleaning Service LLC
        </h1>
      </div>
      <div className="h-[810px] flex flex-col items-center pt-[50px]">
        <p className="text-[24px] font-medium text-center mb-[50px]">
          Welcome to Cleaning Service LLC
        </p>
        <div className="flex flex-row mb-[30px]">
          <div className="mr-[10px]">
            <input
              type="text"
              placeholder="First Name"
              className="w-[290px] h-[60px]  border-2 dark:border-gray-700 rounded-[15px] pl-[20px] focus:outline-none pl-[15px]"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Last Name"
              className="w-[290px] h-[60px]  border-2 dark:border-gray-700 rounded-[15px] pl-[20px] focus:outline-none pl-[15px]"
            />
          </div>
        </div>
        <div className="mb-[30px]">
          <input
            type="text"
            placeholder="Email"
            className="w-[590px] h-[60px]  border-2 dark:border-gray-700 rounded-[15px] pl-[20px] focus:outline-none pl-[15px]"
          />
        </div>
        <div className="flex flex-row mb-[30px]">
          <div className="mr-[10px]">
            <input
              type="text"
              placeholder="Password"
              className="w-[290px] h-[60px]  border-2 dark:border-gray-700 rounded-[15px] pl-[20px] focus:outline-none pl-[15px]"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Confirm Password"
              className="w-[290px] h-[60px]  border-2 dark:border-gray-700 rounded-[15px] pl-[20px] focus:outline-none pl-[15px]"
            />
          </div>
        </div>
        <button className="w-[300px] h-[60px] bg-black text-white font-bold rounded-[15px] mt-[20px]">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignUp;
