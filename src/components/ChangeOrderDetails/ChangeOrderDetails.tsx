import React, { useContext, useState } from "react";
import Axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import MyContext from "./../../context/MyContext";

const ChangeOrderDetails = () => {
  const Context: any = useContext(MyContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const order = Context[0].filter((c: any) => c.id === id);
  console.log("order", order);
  const fullName =
    order[0].customer.firstName + " " + order[0].customer.lastName;
  const fullAddress =
    order[0].customer.streetAddress +
    " " +
    order[0].customer.city +
    " " +
    order[0].customer.state +
    " " +
    order[0].customer.zipCode;

  // let time = order[0].appointmentTime;

  // const formattedTime = time.substring(0, 5) + " " + time.substring(6, 8);

  // console.log(formattedTime);

  const [name, setName] = useState(fullName);
  const [address, setAddress] = useState(fullAddress);
  const [email, setEmail] = useState(order[0].customer.email);
  const [phoneNo, setPhoneNo] = useState(order[0].customer.phoneNo);
  const [deliveryDate, setDeliveryDate] = useState(
    new Date(order[0].appointmentDate).toISOString().split("T")[0]
  );
  const [deliveryTime, setDeliveryTime] = useState(order[0].appointmentTime);
  const [noOfBedrooms, setNoOfBedrooms] = useState(order[0].noOfBedrooms);
  const [noOfBathrooms, setNoOfBathrooms] = useState(order[0].noOfBathrooms);
  const [noOfLivingrooms, setNoOfLivingrooms] = useState(
    order[0].noOfLivingrooms
  );
  const [noOfKitchens, setNoOfKitchens] = useState(order[0].noOfKitchens);
  const [totalCost, setTotalCost] = useState(order[0].totalCost);
  const [orderStatus, setOrderStatus] = useState(order[0].orderStatus);

  const handleBedrooms = (e: any) => {
    const min = 0;
    const max = 8;
    const value = Math.max(min, Math.min(max, Number(e.target.value)));
    setNoOfBedrooms(value);

    const cost =
      Number(value) * 40 +
      Number(noOfBathrooms) * 40 +
      Number(noOfLivingrooms) * 40 +
      Number(noOfKitchens) * 40;
    setTotalCost(cost);
  };

  const handleBathrooms = (e: any) => {
    const min = 0;
    const max = 8;
    const value = Math.max(min, Math.min(max, Number(e.target.value)));
    setNoOfBathrooms(value);
    const cost =
      Number(noOfBedrooms) * 40 +
      Number(value) * 40 +
      Number(noOfLivingrooms) * 40 +
      Number(noOfKitchens) * 40;
    setTotalCost(cost);
  };

  const handleLivingrooms = (e: any) => {
    const min = 0;
    const max = 4;
    const value = Math.max(min, Math.min(max, Number(e.target.value)));
    setNoOfLivingrooms(value);
    const cost =
      Number(noOfBedrooms) * 40 +
      Number(noOfBathrooms) * 40 +
      Number(value) * 40 +
      Number(noOfKitchens) * 40;
    setTotalCost(cost);
  };

  const handleKitchens = (e: any) => {
    const min = 0;
    const max = 4;
    const value = Math.max(min, Math.min(max, Number(e.target.value)));
    setNoOfKitchens(value);
    //console.log(Number(e.target.value) * 40);
    const cost =
      Number(noOfBedrooms) * 40 +
      Number(noOfBathrooms) * 40 +
      Number(noOfLivingrooms) * 40 +
      Number(value) * 40;
    setTotalCost(cost);
  };
  const handleSubmit = () => {
    console.log("Submit button is clicked");
    Axios.put(`http://localhost:3001/cleaningInfo/changeOrder/${order[0].id}`, {
      totalBedrooms: noOfBedrooms,
      totalBathrooms: noOfBathrooms,
      totalLivingrooms: noOfLivingrooms,
      totalKitchens: noOfKitchens,
      appointmentDate: deliveryDate,
      appointmentTime: deliveryTime,
      totalCost: totalCost,
      orderStatus: orderStatus,
      customerId: order[0].customer.id,
    })
      .then((result) => {
        // console.log(deliveryDate);
        console.log("Called");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-[80%] mx-[100px] px-[100px] pt-[60px]">
      <div className="grid grid-cols-2 justify-items-start mb-[50px]">
        <div className="flex flex-col">
          <span className="text-[20px] text-[#636D84] font-medium">Name</span>
          <input
            type="text"
            value={name}
            readOnly
            className="w-[300px] h-[55px] bg-[#d9d9d9] rounded-[15px] pl-[20px] focus:outline-none"
          />
        </div>
        <div className="flex flex-col pl-[100px]">
          <span className="text-[20px] text-[#636D84] font-medium">
            Address
          </span>
          <input
            type="text"
            value={address}
            readOnly
            className="w-[300px] h-[55px] bg-[#d9d9d9] rounded-[15px] pl-[20px] focus:outline-none"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 justify-items-start mb-[50px]">
        <div className="flex flex-col">
          <span className="text-[20px] text-[#636D84] font-medium">Email</span>
          <input
            type="text"
            value={email}
            readOnly
            className="w-[300px] h-[55px] bg-[#d9d9d9] rounded-[15px] pl-[20px] focus:outline-none"
          />
        </div>
        <div className="flex flex-col pl-[100px]">
          <span className="text-[20px] text-[#636D84] font-medium">
            Phone No
          </span>
          <input
            type="text"
            value={phoneNo}
            readOnly
            className="w-[300px] h-[55px] bg-[#d9d9d9] rounded-[15px] pl-[20px] focus:outline-none"
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
            value={deliveryDate}
            onChange={(e: any) => setDeliveryDate(e.target.value)}
            className="w-[300px] h-[55px] border-2 dark:border-gray-700 rounded-[15px] pl-[20px] focus:outline-none"
          />
        </div>
        <div className="flex flex-col pl-[100px]">
          <span className="text-[20px] text-[#636D84] font-medium">
            Delivery Time
          </span>
          <input
            type="time"
            value={deliveryTime}
            onChange={(e) => setDeliveryTime(e.target.value)}
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
            value={noOfBedrooms}
            onChange={handleBedrooms}
            className="w-[300px] h-[55px] border-2 dark:border-gray-700 rounded-[15px] pl-[20px] focus:outline-none"
            max={8}
          />
        </div>
        <div className="flex flex-col pl-[100px]">
          <span className="text-[20px] text-[#636D84] font-medium">
            Number of Bathrooms
          </span>
          <input
            type="number"
            value={noOfBathrooms}
            onChange={handleBathrooms}
            className="w-[300px] h-[55px] border-2 dark:border-gray-700 rounded-[15px] pl-[20px] focus:outline-none"
            max={8}
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
            value={noOfLivingrooms}
            onChange={handleLivingrooms}
            className="w-[300px] h-[55px] border-2 dark:border-gray-700 rounded-[15px] pl-[20px] focus:outline-none"
            max={4}
          />
        </div>
        <div className="flex flex-col pl-[100px]">
          <span className="text-[20px] text-[#636D84] font-medium">
            Number of Kitchens
          </span>
          <input
            type="number"
            value={noOfKitchens}
            onChange={handleKitchens}
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
            value={"$" + totalCost}
            className="w-[300px] h-[55px] border-2 dark:border-gray-700 rounded-[15px] pl-[20px] focus:outline-none"
            readOnly
          />
        </div>
        <div className="flex flex-col pl-[100px]">
          <span className="text-[20px] text-[#636D84] font-medium">
            Order Status
          </span>
          <select
            value={orderStatus}
            onChange={(e) => setOrderStatus(e.target.value)}
            className="w-[300px] h-[55px] border-2 dark:border-gray-700 rounded-[15px] pl-[20px] focus:outline-none"
          >
            <option value="Created">Created</option>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className="bg-black text-[24px] font-bold w-[320px] h-[62px] text-white rounded-[15px] mx-auto mb-[50px]"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ChangeOrderDetails;
