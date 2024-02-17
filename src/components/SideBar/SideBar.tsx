import React from "react";
import dashboardIcon from "../../images/dashboard-icon.png";
import helpIcon from "../../images/help-icon.png";
import settingIcon from "../../images/settings-icon.png";

const SideBar = () => {
  return (
    <div className="w-[20%] h-[760px] border-r-[1px] border-[#9F9FA7] pl-[20px] pt-[60px] bg-[#fff]">
      <div className="flex flex-row justify-start items-center mb-[50px]">
        <img
          src={dashboardIcon}
          alt="Dashboard Icon"
          className="w-[50px] h-[45px]"
        />
        <span className="text-[24px] text-[#949A9D] ml-[8px] pt-[8px]">
          Dashboard
        </span>
      </div>
      <div className="flex flex-row justify-start items-center mb-[50px]">
        <img
          src={settingIcon}
          alt="Setting Icon"
          className="w-[50px] h-[45px]"
        />
        <span className="text-[24px] text-[#949A9D] ml-[8px]">Settings</span>
      </div>
      <div className="flex flex-row justify-start items-center">
        <img src={helpIcon} alt="Help Icon" className="w-[50px] h-[45px]" />
        <span className="text-[24px] text-[#949A9D] ml-[8px]">
          Help & Support
        </span>
      </div>
    </div>
  );
};

export default SideBar;
