import React from "react";
import filterIcon from "../../images/filter-icon.png";
import downArrow from "../../images/down-arrow.png";

const SortAndFilter = () => {
  return (
    <div className="flex flex-row justify-between bg-white px-[30px] py-[30px]">
      <div className="flex flex-row justify-evenly items-center w-[140px] h-[52px] border dark:border-gray-700 rounded-[15px]">
        <img src={filterIcon} alt="filter Icon" className="w-[30px] h-[36px]" />
        <span className="text-[16px]">Filter</span>
      </div>
      <div className="flex flex-row justify-evenly items-center w-[180px] h-[52px] border dark:border-gray-700 rounded-[15px]">
        <span className="text-[16px]">Create Time</span>
        <img src={downArrow} alt="down arrow" className="w-[20px] h-[20px]" />
      </div>
    </div>
  );
};

export default SortAndFilter;
