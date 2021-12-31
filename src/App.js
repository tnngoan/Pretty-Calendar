import React, { useState } from "react";
import "./App.css";
import getMonth from "../src/utils/getMonth";
import NavigationBar from "./components/NavigationBar";
import CalendarView from "./components/CalendarView";
import SideBar from "./components/SideBar";

function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  return (
    <div className="flex flex-col">
      <div>
        <NavigationBar />
        <div className="flex flex-1">
          <SideBar month={currentMonth} />
          <CalendarView month={currentMonth} />
        </div>
      </div>
    </div>
  );
}

export default App;
