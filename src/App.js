import React, { useState, useContext, useEffect } from "react";
import "./App.css";
import "antd/dist/antd.css";
import getMonth from "../src/utils/getMonth";
import NavigationBar from "./components/main/NavigationBar";
import CalendarView from "./components/main/CalendarView";
import SidebarCalendar from "./components/sidebar/SidebarCalendar";
import SidebarEvents from "./components/sidebar/SidebarEvents";
import GlobalContext from "./context/GlobalContext";

function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthNumber, allEvents } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthNumber));
  }, [monthNumber]);

  return (
    <div className="flex flex-1 h-screen overflow-y-hidden gap-2">
      <div className="flex flex-col relative overflow-y-scroll no-scrollbar w-80">
        <SidebarCalendar />
        <hr />
        <SidebarEvents />
      </div>
      <div className="flex flex-1 flex-col rounded-sm border border-gray-200">
        <NavigationBar />
        <CalendarView month={currentMonth} events={allEvents} />
      </div>
    </div>
  );
}

export default App;
