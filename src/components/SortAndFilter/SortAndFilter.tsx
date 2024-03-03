import React, { useState, useContext } from "react";
import filterIcon from "../../images/filter-icon.png";
import OrderTable from "../OrderTable/OrderTable";
import MyContext from "../../context/MyContext";
// import downArrow from "../../images/down-arrow.png";

const SortAndFilter = () => {
  const [sortOption, setSortOption] = useState("createdAt desc");
  const [filterOption, setFilterOption] = useState<Array<string>>([]);
  const [filter, setFilter] = useState(false);
  const { data }: any = useContext(MyContext);

  const handleOptionChange = (option: string) => {
    let isSelected = filterOption.includes(option);

    if (isSelected) {
      setFilterOption(filterOption.filter((item: string) => item !== option));
    } else {
      setFilterOption([...filterOption, option]);
    }
  };
  return (
    <div className="w-[80%]">
      <div className="flex flex-row justify-between bg-white px-[30px] py-[30px]">
        <div>
          <div
            className="flex flex-row justify-evenly items-center w-[140px] h-[52px] border dark:border-gray-700 rounded-[15px]"
            onClick={() => setFilter(!filter)}
          >
            <img
              src={filterIcon}
              alt="filter Icon"
              className="w-[30px] h-[36px]"
            />
            <span className="text-[16px]">Filter</span>
          </div>
          {filter && (
            <div className="flex flex-col justify-evenly items-start absolute w-[140px] bg-[#fff] px-[10px] py-[10px] border dark:border-gray-700">
              <label>
                <input
                  type="checkbox"
                  value="created"
                  checked={filterOption.includes("created")}
                  onChange={() => handleOptionChange("created")}
                />
                Created
              </label>
              <label>
                <input
                  type="checkbox"
                  value="pending"
                  checked={filterOption.includes("pending")}
                  onChange={() => handleOptionChange("pending")}
                />
                Pending
              </label>
              <label>
                <input
                  type="checkbox"
                  value="completed"
                  checked={filterOption.includes("completed")}
                  onChange={() => handleOptionChange("completed")}
                />
                completed
              </label>
            </div>
          )}
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
      <OrderTable
        sortOption={sortOption}
        filterOption={filterOption}
        data={data}
      />
    </div>
  );
};

export default SortAndFilter;
