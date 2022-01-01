import React, { useState, useContext, useEffect } from "react";
import "./App.css";
import getMonth from "../src/utils/getMonth";
import NavigationBar from "./components/NavigationBar";
import CalendarView from "./components/CalendarView";
import SideBar from "./components/SideBar";
import GlobalContext from "./context/GlobalContext";

function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthNumber, setMonthNumber } = useContext(GlobalContext);
  useEffect(() => {
    setCurrentMonth(getMonth(monthNumber));
  }, [monthNumber]);
  return (
    <div className="flex tracking-wider	">
      <div className="flex flex-col w-25%">
        <SideBar month={currentMonth} />
      </div>
      <div className="relative flex flex-col w-full bg-blue-200">
        <NavigationBar />
        <CalendarView month={currentMonth} />
      </div>
    </div>
  );
}

export default App;
