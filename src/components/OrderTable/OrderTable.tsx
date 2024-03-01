import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import { orders } from "../../Types/Types";
import sortData from "../../common/SortData";
import filterData from "../../common/filterData";
import { orderTablePropsTypes } from "../../Types/Types";

const DataTable = ({
  sortOption,
  filterOption,
  data,
}: orderTablePropsTypes) => {
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();

  const sortedData: orders[] = sortData(data, sortOption);

  const filterD: any =
    filterOption.length > 0 ? filterData(data, filterOption) : sortedData;

  const itemsPerPage = 3;
  const noOfPages =
    sortedData.length > 0 ? Math.ceil(filterD.length / itemsPerPage) : 0;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // console.log(filterD);

  const dataFilter: any =
    filterD.length > 0 ? filterD.slice(startIndex, endIndex) : [];

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="pt-[50px] px-[30px]">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-white-500 dark:text-white-400">
            <thead className="text-xs text-gray-700 uppercase bg-white dark:bg-gray-700 dark:text-gray-400 border-b dark:border-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Customer Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Address
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone No
                </th>
                <th scope="col" className="px-6 py-3">
                  Order Details
                </th>
                <th scope="col" className="px-6 py-3">
                  Order Status
                </th>
              </tr>
            </thead>

            {sortedData.length > 0 ? (
              dataFilter.map((d: orders) => (
                <tbody>
                  <tr
                    className="bg-white border-b dark:border-gray-700"
                    onClick={() => navigate(`/orderdetails/${d.id}`)}
                    key={d.id}
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-[#636D84] whitespace-nowrap dark:text-white"
                    >
                      {d.customer.firstName} {d.customer.lastName}
                    </th>
                    <td className="px-6 py-4 text-[#636D84]">
                      {d.customer.streetAddress} {d.customer.city}{" "}
                      {d.customer.state} {d.customer.zipCode}
                    </td>
                    <td className="px-6 py-4 text-[#636D84]">
                      {d.customer.phoneNo}
                    </td>
                    <td className="px-6 py-4 text-[#636D84]">
                      <div>
                        <p>No of Bedrooms: {d.noOfBedrooms}</p>
                        <p>No of Bathrooms: {d.noOfBathrooms}</p>
                        <p>No of LivingRooms: {d.noOfLivingrooms}</p>
                        <p>No of Kitchens: {d.noOfKitchens}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-[#636D84]">
                      {d.orderStatus}
                    </td>
                  </tr>
                </tbody>
              ))
            ) : (
              <p className="text-center text-[36px]">Loading</p>
            )}
          </table>
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        noOfPages={noOfPages}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default DataTable;
