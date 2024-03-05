import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MyContext from "./../../context/MyContext";
const OrderDetails = () => {
  const { data }: any = useContext(MyContext);
  const navigate = useNavigate();
  const { id } = useParams();

  const order = data[0].filter((c: any) => c.id === id);

  console.log(order);

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
            {order[0].createdAt.slice(0, 10)}
          </span>
        </div>
        <div className="flex flex-col pl-[100px]">
          <span className="text-[20px] text-[#636D84] font-medium">
            Delivery Date & Time
          </span>
          <span className="text-[24px] font-semibold  mt-[10px]">
            {order[0].appointmentDate.slice(0, 10)} {order[0].appointmentTime}
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
        <button
          className="bg-black text-[24px] font-bold w-[320px] h-[62px] text-white rounded-[15px] mx-auto mb-[50px]"
          onClick={() => navigate(`/changeorderdetails/${order[0].id}`)}
        >
          Change Order
        </button>
      </div>
    </div>
  );
};

export default OrderDetails;
