import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import bellIcon from "../../images/bell-icon.png";
import chatIcon from "../../images/chat-icon1.png";
import TestimonialImage from "../../images/TestimonialImage1.png";
import MyContext from "../../context/MyContext";

const TopBar = () => {
  const [islogout, setIsLogOut] = useState(false);
  const { setToken } = useContext(MyContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    setToken("");
    navigate("/login");
  };
  return (
    <div className="flex flex-row justify-between items-center px-[50px] py-[50px] border-b-[2px] dark:border-gray-700 bg-[#fff]">
      <div className="flex items-center">
        <h1 className="text-[40px] font-bold">Cleaning Service LLC</h1>
        <div className="ml-[80px]">
          <input
            type="text"
            placeholder="Search..."
            className="w-[450px] h-[50px] text-[#636D84] border-2 dark:border-gray-700 rounded-[15px] pl-[20px] focus:outline-none"
          />
        </div>
      </div>
      <div className="flex justify-evenly">
        <div className="w-[50px] h-[50px] bg-[#F2F3F5] rounded-[100%]">
          <img
            src={bellIcon}
            alt="bell Icon"
            className="w-[40px] h-[40px] pl-[10px] pt-[6px]"
          />
        </div>
        <div className="w-[50px] h-[50px] bg-[#F2F3F5] rounded-[100%] ml-[20px]">
          <img
            src={chatIcon}
            alt="chat Icon"
            className="w-[40px] h-[40px]  pl-[10px] pt-[10px]"
          />
        </div>
        <div
          className="w-[50px] h-[50px] bg-[#F2F3F5] rounded-[100%] ml-[20px]"
          onClick={() => setIsLogOut(!islogout)}
        >
          <img
            src={TestimonialImage}
            alt="chat Icon"
            className="w-[50px] h-[50px]"
          />
          {islogout && (
            <div onClick={handleLogOut}>
              <span>LogOut</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
