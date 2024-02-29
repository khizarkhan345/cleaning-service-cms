import React, { useEffect, useState } from "react";
import { pagination } from "../../Types/Types";
import leftArrow from "../../images/left-arrow.png";
import rightArrow from "../../images/right-arrow.png";

const Pagination = ({
  currentPage,
  itemsPerPage,
  noOfPages,
  handlePageChange,
}: pagination) => {
  const [currentPage1, setCurrentPage1] = useState(currentPage);

  const numberArray = Array.from({ length: noOfPages });

  useEffect(() => {
    handlePageChange(currentPage1);
  }, [currentPage1, handlePageChange]);

  return (
    <div className="flex justify-center mt-[50px]">
      <button
        className={`${
          currentPage1 === 1 ? "bg-white" : "bg-white"
        } h-[52px] border dark:border-gray-700 rounded-[15px] rounded-r-none px-[15px]`}
        onClick={() => setCurrentPage1(currentPage1 - 1)}
        disabled={currentPage1 === 1}
      >
        <img
          src={leftArrow}
          alt="left Arrow"
          className="w-[36px] h-[36px] inline mb-[5px]"
        />
        <span className="ml-[15px] text-[16px] font-bold">Previous</span>
      </button>
      {numberArray.map((_, index: number) => (
        <button
          key={index}
          className={`${
            currentPage1 === index + 1 ? "bg-[#F3F5F7]" : "bg-white"
          } border dark:border-gray-700 w-[60px] h-[52px] text-[16px] font-bold`}
          onClick={() => setCurrentPage1(index + 1)}
        >
          {index + 1}
        </button>
      ))}

      <button
        className={`${
          currentPage1 === noOfPages ? "bg-white" : "bg-white"
        } h-[52px] border dark:border-gray-700 rounded-[15px] rounded-l-none px-[15px]`}
        onClick={() => setCurrentPage1(currentPage1 + 1)}
        disabled={currentPage1 === noOfPages}
      >
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
