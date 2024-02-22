import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SortAndFilter from "../SortAndFilter/SortAndFilter";
import Pagination from "../Pagination/Pagination";
import { orders } from "../../Types/Types";

const DataTable = () => {
  const [data, setData] = useState<Array<orders>>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();

  const itemsPerPage = 3;
  const noOfPages =
    data.length > 0 ? Math.ceil(data[0].length / itemsPerPage) : 0;
  //const noOfPages = 1;
  //console.log(noOfPages);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  //console.log(data);
  const dataFilter: any =
    data.length > 0 ? data[0].slice(startIndex, endIndex) : [];

  console.log(dataFilter);

  const handlePageChange = (page: number) => {
    console.log("page", page);
    setCurrentPage(page);
  };

  useEffect(() => {
    fetch("http://localhost:3001/cleaningInfo")
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        //console.log(data);
        setData((prevData) => {
          return [...prevData, data.data];
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="w-[80%] ">
      <SortAndFilter />
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
            <tbody>
              {data.length > 0 ? (
                dataFilter.map((d: orders) => (
                  <tr
                    className="bg-white border-b dark:border-gray-700"
                    onClick={() => navigate(`/orderdetails/${d.id}`)}
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
                ))
              ) : (
                <h1>Loading</h1>
              )}
            </tbody>
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
