import React, { useState, useContext, useEffect } from "react";
import "./App.css";
import getMonth from "../src/utils/getMonth";
import NavigationBar from "./components/main/NavigationBar";
import CalendarView from "./components/main/CalendarView";
import SidebarCalendar from "./components/sidebar/SidebarCalendar";
import SidebarEvents from "./components/sidebar/SidebarEvents";
import GlobalContext from "./context/GlobalContext";

function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthNumber } = useContext(GlobalContext);
  
  useEffect(() => {
    setCurrentMonth(getMonth(monthNumber));
  }, [monthNumber]);

  return (
    <div className="flex flex-1 h-screen overflow-y-hidden gap-3">
      <div className="flex flex-col relative overflow-y-scroll no-scrollbar w-80">
        <SidebarCalendar />
        <SidebarEvents />
      </div>
      <div className="flex flex-1 flex-col bg-blue-200">
        <NavigationBar />
        <CalendarView month={currentMonth} />
      </div>
    </div>
  );
}

export default App;
