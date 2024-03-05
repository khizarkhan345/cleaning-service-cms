import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
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
import { ProtectRoutes } from "./components/ProtectedRoute/ProtectedRoute";
import "./App.css";
import SortAndFilter from "./components/SortAndFilter/SortAndFilter";

function App() {
  const [token, setToken] = useState<string>("");
  const data: any = useFetch();
  // const navigate = useNavigate();

  const length = data.length > 0 ? data.length : 0;
  return (
    <div className="bg-[#F3F5F7]">
      <BrowserRouter>
        <MyContext.Provider value={{ data, token, setToken, length }}>
          {token ? <TopBar /> : ""}
          <div className={`${token ? "flex flex-row" : "block"}`}>
            {token && <SideBar />}
            <Routes>
              <Route element={<ProtectRoutes />}>
                <Route path="/" element={<SortAndFilter />} />
              </Route>
              <Route element={<ProtectRoutes />}>
                <Route path="/orderdetails/:id" element={<OrderDetails />} />
              </Route>
              <Route element={<ProtectRoutes />}>
                <Route
                  path="/changeorderdetails/:id"
                  element={<ChangeOrderDetails />}
                />
              </Route>

              <Route path="/settings" element={<Settings />} />
              <Route path="/helpandsupport" element={<HelpAndSupport />} />
              <Route path="/login" element={<LogIn />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </div>
        </MyContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
