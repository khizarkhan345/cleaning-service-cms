import React from "react";

const LogIn = () => {
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
        <div className="mb-[30px]">
          <input
            type="text"
            placeholder="Email"
            className="w-[500px] h-[60px]  border-2 dark:border-gray-700 rounded-[15px] pl-[20px] focus:outline-none pl-[15px]"
          />
        </div>
        <div className="mb-[30px]">
          <input
            type="text"
            placeholder="Password"
            className="w-[500px] h-[60px]  border-2 dark:border-gray-700 rounded-[15px] pl-[20px] focus:outline-none pl-[15px]"
          />
        </div>
        <button className="w-[250px] h-[60px] bg-black text-white font-bold rounded-[15px] mt-[20px]">
          Log In
        </button>
      </div>
    </div>
  );
};

export default LogIn;
