import React from "react";
import leftArrow from "../../images/left-arrow.png";
import rightArrow from "../../images/right-arrow.png";

const Pagination = () => {
  return (
    <div className="flex justify-center mt-[50px]">
      <button className=" h-[52px] bg-white border dark:border-gray-700 rounded-[15px] rounded-r-none px-[15px]">
        <img
          src={leftArrow}
          alt="left Arrow"
          className="w-[36px] h-[36px] inline mb-[5px]"
        />
        <span className="ml-[15px] text-[16px] font-bold">Previous</span>
      </button>
      <button className="bg-white  border dark:border-gray-700 w-[60px] h-[52px] text-[16px] font-bold">
        1
      </button>
      <button className="bg-white  border dark:border-gray-700 w-[60px] h-[52px] text-[16px] font-bold">
        2
      </button>
      <button className="bg-white  border dark:border-gray-700 w-[60px] h-[52px] text-[16px] font-bold">
        3
      </button>
      <button className="bg-white  border dark:border-gray-700 w-[60px] h-[52px] text-[16px] font-bold">
        4
      </button>
      <button className="bg-white  border dark:border-gray-700 w-[60px] h-[52px] text-[16px] font-bold">
        5
      </button>
      <button className="bg-white  border dark:border-gray-700 w-[60px] h-[52px] text-[16px] font-bold">
        6
      </button>
      <button className="h-[52px] bg-white border dark:border-gray-700 rounded-[15px] rounded-l-none px-[15px]">
        <span className="mr-[15px] text-[16px] font-bold">Next</span>
        <img
          src={rightArrow}
          alt="right Arrow"
          className="w-[36px] h-[36px] inline"
        />
      </button>
    </div>
  );
};

export default Pagination;
