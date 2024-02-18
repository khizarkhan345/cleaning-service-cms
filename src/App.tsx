import React from "react";
import TopBar from "./components/TopBar/TopBar";
import SideBar from "./components/SideBar/SideBar";
import DataTable from "./components/OrderTable/OrderTable";
import OrderDetails from "./components/OrderDetails/OrderDetails";

import "./App.css";

function App() {
  return (
    <div className="bg-[#F3F5F7]">
      <TopBar />
      <div className="flex flex-row">
        <SideBar />
        <OrderDetails />
      </div>
    </div>
  );
}

export default App;
