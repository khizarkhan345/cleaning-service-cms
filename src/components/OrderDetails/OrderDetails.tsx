import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import MyContext from "./../../context/MyContext";
import { orders } from "../../Types/Types";

const OrderDetails = () => {
  const Context: any = useContext(MyContext);
  const { id } = useParams();

  const order = Context[0].filter((c: any) => c.id === id);
  console.log("order", order);

  const createdAt = new Date(order[0].createdAt);
  const appointmentDate = new Date(order[0].appointmentDate);

  const year = createdAt.getFullYear();
  const month = createdAt.getMonth() + 1;
  const day = createdAt.getDate();

  const appointmentYear = appointmentDate.getFullYear();
  const appointmentMonth = appointmentDate.getMonth() + 1;
  const appointmentDay = appointmentDate.getDate();

  // Format the date as YYYY-MM-DD
  const formattedCreatedAt = `${year}-${month < 10 ? "0" + month : month}-${
    day < 10 ? "0" + day : day
  }`;

  const formattedAppointmentDate = `${appointmentYear}-${
    appointmentMonth < 10 ? "0" + appointmentMonth : appointmentMonth
  }-${appointmentDay < 10 ? "0" + appointmentDay : appointmentDay}`;

  return (
    <div className="w-[80%] mx-[100px] px-[100px] pt-[60px]">
      <div className="grid grid-cols-2 justify-items-start mb-[50px]">
        <div className="flex flex-col">
          <span className="text-[20px] text-[#636D84] font-medium">Name</span>
          <span className="text-[24px] font-semibold mt-[10px]">
            {order[0].customer.firstName} {order[0].customer.lastName}
          </span>
        </div>
        <div className="flex flex-col pl-[100px]">
          <span className="text-[20px] text-[#636D84] font-medium">
            Address
          </span>
          <span className="text-[24px] font-semibold  mt-[10px]">
            {order[0].customer.streetAddress} {order[0].customer.city}{" "}
            {order[0].customer.state} {order[0].customer.zipCode}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 justify-items-start mb-[50px]">
        <div className="flex flex-col">
          <span className="text-[20px] text-[#636D84] font-medium">Email</span>
          <span className="text-[24px] font-semibold mt-[10px]">
            {order[0].customer.email}
          </span>
        </div>
        <div className="flex flex-col pl-[100px]">
          <span className="text-[20px] text-[#636D84] font-medium">
            Phone No
          </span>
          <span className="text-[24px] font-semibold  mt-[10px]">
            {order[0].customer.phoneNo}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 justify-items-start mb-[50px]">
        <div className="flex flex-col">
          <span className="text-[20px] text-[#636D84] font-medium">
            Created Date
          </span>
          <span className="text-[24px] font-semibold mt-[10px]">
            {formattedCreatedAt}
          </span>
        </div>
        <div className="flex flex-col pl-[100px]">
          <span className="text-[20px] text-[#636D84] font-medium">
            Delivery Date & Time
          </span>
          <span className="text-[24px] font-semibold  mt-[10px]">
            {formattedAppointmentDate} {order[0].appointmentTime}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 justify-items-start mb-[50px]">
        <div className="flex flex-col">
          <span className="text-[20px] text-[#636D84] font-medium">
            No Of Bedrooms
          </span>
          <span className="text-[24px] font-semibold mt-[10px]">
            {order[0].noOfBedrooms}
          </span>
        </div>
        <div className="flex flex-col pl-[100px]">
          <span className="text-[20px] text-[#636D84] font-medium">
            Number of Bathrooms
          </span>
          <span className="text-[24px] font-semibold  mt-[10px]">
            {order[0].noOfBathrooms}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 justify-items-start mb-[50px]">
        <div className="flex flex-col">
          <span className="text-[20px] text-[#636D84] font-medium">
            No Of LivingRooms
          </span>
          <span className="text-[24px] font-semibold mt-[10px]">
            {order[0].noOfLivingrooms}
          </span>
        </div>
        <div className="flex flex-col pl-[100px]">
          <span className="text-[20px] text-[#636D84] font-medium">
            Number of Kitchens
          </span>
          <span className="text-[24px] font-semibold  mt-[10px]">
            {order[0].noOfKitchens}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 justify-items-start mb-[50px]">
        <div className="flex flex-col">
          <span className="text-[20px] text-[#636D84] font-medium">
            Total Cost
          </span>
          <span className="text-[24px] font-semibold mt-[10px]">
            ${order[0].totalCost}
          </span>
        </div>
        <div className="flex flex-col pl-[100px]">
          <span className="text-[20px] text-[#636D84] font-medium">
            Order Status
          </span>
          <span className="text-[24px] font-semibold  mt-[10px]">
            {order[0].orderStatus}
          </span>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="bg-black text-[24px] font-bold w-[320px] h-[62px] text-white rounded-[15px] mx-auto">
          Change Order
        </button>
      </div>
    </div>
  );
};

export default OrderDetails;
