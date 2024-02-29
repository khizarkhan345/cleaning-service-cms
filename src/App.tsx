import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyContext from "./context/MyContext";
import TopBar from "./components/TopBar/TopBar";
import SideBar from "./components/SideBar/SideBar";
import DataTable from "./components/OrderTable/OrderTable";
import OrderDetails from "./components/OrderDetails/OrderDetails";
import ChangeOrderDetails from "./components/ChangeOrderDetails/ChangeOrderDetails";
import Settings from "./components/Settings/Settings";
import HelpAndSupport from "./components/HelpAndSupport/HelpAndSupport";
import useFetch from "./Hooks/useFetch";
import SignUp from "./components/SignUp/SignUp";
import LogIn from "./components/LogIn/LogIn";

import "./App.css";
import SortAndFilter from "./components/SortAndFilter/SortAndFilter";

function App() {
  const data: any = useFetch();

  return (
    <div className="bg-[#F3F5F7]">
      <BrowserRouter>
        <TopBar />
        <div className="flex flex-row">
          <SideBar />
          <MyContext.Provider value={data}>
            <Routes>
              <Route path="/" element={<SortAndFilter />} />
              <Route path="/orderdetails/:id" element={<OrderDetails />} />
              <Route
                path="/changeorderdetails/:id"
                element={<ChangeOrderDetails />}
              />
              <Route path="/settings" element={<Settings />} />
              <Route path="/helpandsupport" element={<HelpAndSupport />} />
            </Routes>
          </MyContext.Provider>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
