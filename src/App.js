import React, { useState, useContext, useEffect } from "react";
import "./App.css";
import getMonth from "../src/utils/getMonth";
import NavigationBar from "./components/main/NavigationBar";
import CalendarView from "./components/main/CalendarView";
import Sidebar from "./components/sidebar/Sidebar";
import GlobalContext from "./context/GlobalContext";

function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthNumber } = useContext(GlobalContext);
  useEffect(() => {
    setCurrentMonth(getMonth(monthNumber));
  }, [monthNumber]);
  return (
    <div className="flex flex-1 h-screen overflow-y-hidden">
      <div className="flex flex-col relative overflow-y-scroll no-scrollbar">
        <Sidebar />
      </div>
      <div className="flex flex-1 flex-col bg-blue-200">
        <NavigationBar />
        <CalendarView month={currentMonth} />
      </div>
    </div>
  );
}

export default App;
