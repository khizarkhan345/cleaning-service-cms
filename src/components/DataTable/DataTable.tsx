import React from "react";
import SortAndFilter from "../SortAndFilter/SortAndFilter";

const DataTable = () => {
  return (
    <div className="w-[80%] ">
      <SortAndFilter />
      <div className="pt-[50px] px-[30px]">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-white-500 dark:text-white-400">
            <thead className="text-xs text-gray-700 uppercase bg-white dark:bg-gray-700 dark:text-gray-400 border-b dark:border-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Color
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-[#636D84] whitespace-nowrap dark:text-white"
                >
                  Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4 text-[#636D84]">Silver</td>
                <td className="px-6 py-4 text-[#636D84]">Laptop</td>
                <td className="px-6 py-4 text-[#636D84]">$2999</td>
                <td className="px-6 py-4 text-[#636D84]">xyz</td>
              </tr>
              <tr className="bg-white  border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-[#636D84] whitespace-nowrap dark:text-white"
                >
                  Microsoft Surface Pro
                </th>
                <td className="px-6 py-4 text-[#636D84]">White</td>
                <td className="px-6 py-4 text-[#636D84]">Laptop PC</td>
                <td className="px-6 py-4 text-[#636D84]">$1999</td>
                <td className="px-6 py-4 text-[#636D84]">xyz</td>
              </tr>
              <tr className="bg-white border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-[#636D84] whitespace-nowrap dark:text-white"
                >
                  Magic Mouse 2
                </th>
                <td className="px-6 py-4 text-[#636D84]">Black</td>
                <td className="px-6 py-4 text-[#636D84]">Accessories</td>
                <td className="px-6 py-4 text-[#636D84]">$99</td>
                <td className="px-6 py-4 text-[#636D84]">xyz</td>
              </tr>
              <tr className="bg-white border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-[#636D84] whitespace-nowrap dark:text-white"
                >
                  Google Pixel Phone
                </th>
                <td className="px-6 py-4 text-[#636D84]">Gray</td>
                <td className="px-6 py-4 text-[#636D84]">Phone</td>
                <td className="px-6 py-4 text-[#636D84]">$799</td>
                <td className="px-6 py-4 text-[#636D84]">Xyz</td>
              </tr>
              <tr className="bg-white border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-[#636D84] whitespace-nowrap dark:text-white"
                >
                  Apple Watch 5
                </th>
                <td className="px-6 py-4 text-[#636D84]">Red</td>
                <td className="px-6 py-4 text-[#636D84]">Wearables</td>
                <td className="px-6 py-4 text-[#636D84]">$999</td>
                <td className="px-6 py-4 text-[#636D84]">XYZ</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
