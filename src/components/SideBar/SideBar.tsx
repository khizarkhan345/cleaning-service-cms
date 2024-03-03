import React from "react";
import { Link } from "react-router-dom";
import dashboardIcon from "../../images/dashboard-icon.png";
import helpIcon from "../../images/help-icon.png";
import settingIcon from "../../images/settings-icon.png";

interface sideBarType {
  token: string;
}
const SideBar = ({ token }: sideBarType) => {
  return (
    <div
      className={`${
        token ? "w-[20%]" : "hidden"
      } h-[760px] border-r-[2px] dark:border-gray-700 pl-[20px] pt-[60px] bg-[#fff]`}
    >
      <Link
        to="/"
        className="flex flex-row justify-start items-center mb-[50px]"
      >
        <img
          src={dashboardIcon}
          alt="Dashboard Icon"
          className="w-[50px] h-[45px]"
        />
        <span className="text-[24px] text-[#949A9D] ml-[8px] pt-[8px]">
          Dashboard
        </span>
      </Link>
      <Link
        to="/settings"
        className="flex flex-row justify-start items-center mb-[50px]"
      >
        <img
          src={settingIcon}
          alt="Setting Icon"
          className="w-[50px] h-[45px]"
        />
        <span className="text-[24px] text-[#949A9D] ml-[8px]">Settings</span>
      </Link>
      <Link
        to="/helpandsupport"
        className="flex flex-row justify-start items-center"
      >
        <img src={helpIcon} alt="Help Icon" className="w-[50px] h-[45px]" />
        <span className="text-[24px] text-[#949A9D] ml-[8px]">
          Help & Support
        </span>
      </Link>
    </div>
  );
};

export default SideBar;
