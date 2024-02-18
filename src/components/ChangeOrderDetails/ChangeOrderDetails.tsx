import React from "react";

const ChangeOrderDetails = () => {
  return (
    <div className="w-[80%] mx-[100px] px-[100px] pt-[60px]">
      <div className="grid grid-cols-2 justify-items-start mb-[50px]">
        <div className="flex flex-col">
          <span className="text-[20px] text-[#636D84] font-medium">Name</span>
          <input
            type="text"
            value="Khizar Khan"
            className="w-[300px] h-[55px] border-2 dark:border-gray-700 rounded-[15px] pl-[20px] focus:outline-none"
          />
        </div>
        <div className="flex flex-col pl-[100px]">
          <span className="text-[20px] text-[#636D84] font-medium">
            Address
          </span>
          <input
            type="text"
            value="XYZ Lorton VA 22079"
            className="w-[300px] h-[55px] border-2 dark:border-gray-700 rounded-[15px] pl-[20px] focus:outline-none"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 justify-items-start mb-[50px]">
        <div className="flex flex-col">
          <span className="text-[20px] text-[#636D84] font-medium">Email</span>
          <input
            type="text"
            value="khizar@test.com"
            className="w-[300px] h-[55px] border-2 dark:border-gray-700 rounded-[15px] pl-[20px] focus:outline-none"
          />
        </div>
        <div className="flex flex-col pl-[100px]">
          <span className="text-[20px] text-[#636D84] font-medium">
            Phone No
          </span>
          <input
            type="text"
            value="888-444-2345"
            className="w-[300px] h-[55px] border-2 dark:border-gray-700 rounded-[15px] pl-[20px] focus:outline-none"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 justify-items-start mb-[50px]">
        <div className="flex flex-col">
          <span className="text-[20px] text-[#636D84] font-medium">
            Delivery Date
          </span>
          <input
            type="date"
            value="02/15/2024"
            className="w-[300px] h-[55px] border-2 dark:border-gray-700 rounded-[15px] pl-[20px] focus:outline-none"
          />
        </div>
        <div className="flex flex-col pl-[100px]">
          <span className="text-[20px] text-[#636D84] font-medium">
            Delivery Time
          </span>
          <input
            type="text"
            value="13:00"
            className="w-[300px] h-[55px] border-2 dark:border-gray-700 rounded-[15px] pl-[20px] focus:outline-none"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 justify-items-start mb-[50px]">
        <div className="flex flex-col">
          <span className="text-[20px] text-[#636D84] font-medium">
            No Of Bedrooms
          </span>
          <input
            type="number"
            value="1"
            className="w-[300px] h-[55px] border-2 dark:border-gray-700 rounded-[15px] pl-[20px] focus:outline-none"
          />
        </div>
        <div className="flex flex-col pl-[100px]">
          <span className="text-[20px] text-[#636D84] font-medium">
            Number of Bathrooms
          </span>
          <input
            type="number"
            value="1"
            className="w-[300px] h-[55px] border-2 dark:border-gray-700 rounded-[15px] pl-[20px] focus:outline-none"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 justify-items-start mb-[50px]">
        <div className="flex flex-col">
          <span className="text-[20px] text-[#636D84] font-medium">
            No Of LivingRooms
          </span>
          <input
            type="number"
            value="2"
            className="w-[300px] h-[55px] border-2 dark:border-gray-700 rounded-[15px] pl-[20px] focus:outline-none"
          />
        </div>
        <div className="flex flex-col pl-[100px]">
          <span className="text-[20px] text-[#636D84] font-medium">
            Number of Kitchens
          </span>
          <input
            type="number"
            value="0"
            className="w-[300px] h-[55px] border-2 dark:border-gray-700 rounded-[15px] pl-[20px] focus:outline-none"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 justify-items-start mb-[50px]">
        <div className="flex flex-col">
          <span className="text-[20px] text-[#636D84] font-medium">
            Total Cost
          </span>
          <input
            type="text"
            value="$200"
            className="w-[300px] h-[55px] border-2 dark:border-gray-700 rounded-[15px] pl-[20px] focus:outline-none"
          />
        </div>
        <div className="flex flex-col pl-[100px]">
          <span className="text-[20px] text-[#636D84] font-medium">
            Order Status
          </span>
          <input
            type="text"
            value="Pending/Completed"
            className="w-[300px] h-[55px] border-2 dark:border-gray-700 rounded-[15px] pl-[20px] focus:outline-none"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <button className="bg-black text-[24px] font-bold w-[320px] h-[62px] text-white rounded-[15px] mx-auto">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ChangeOrderDetails;
