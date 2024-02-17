import React from "react";
import TopBar from "./components/TopBar/TopBar";
import SideBar from "./components/SideBar/SideBar";
import "./App.css";

function App() {
  return (
    <div className="bg-[#F3F5F7]">
      <TopBar />
      <SideBar />
    </div>
  );
}

export default App;
