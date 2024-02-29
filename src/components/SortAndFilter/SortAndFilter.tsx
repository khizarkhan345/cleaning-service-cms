import React, { useState, useContext } from "react";
import filterIcon from "../../images/filter-icon.png";
import OrderTable from "../OrderTable/OrderTable";
import MyContext from "../../context/MyContext";
// import downArrow from "../../images/down-arrow.png";

const SortAndFilter = () => {
  const [sortOption, setSortOption] = useState("createdAt desc");
  const data: any = useContext(MyContext);

  return (
    <div className="w-[80%]">
      <div className="flex flex-row justify-between bg-white px-[30px] py-[30px]">
        <div className="flex flex-row justify-evenly items-center w-[140px] h-[52px] border dark:border-gray-700 rounded-[15px]">
          <img
            src={filterIcon}
            alt="filter Icon"
            className="w-[30px] h-[36px]"
          />
          <span className="text-[16px]">Filter</span>
        </div>
        <div>
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="flex flex-row justify-evenly items-center text-[16px] w-[200px] h-[52px] px-[10px] border dark:border-gray-700 rounded-[15px] focus:outline-none"
          >
            <option value="createdAt desc">Create Time (DESC)</option>
            <option value="createdAt asc">Create Time (ASC)</option>
            <option value="appointmentDate desc">Delivery Time (DESC)</option>
            <option value="appointmentDate asc">Delivery Time (ASC)</option>
          </select>
        </div>
      </div>
      <OrderTable sortOption={sortOption} data={data} />
    </div>
  );
};

export default SortAndFilter;
