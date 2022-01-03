import React, { useState, useEffect } from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";

function ContextWrapper(props) {
  const [monthNumber, setMonthNumber] = useState(dayjs().month());
  const [sidebarCalendarMonth, setSidebarCalendarMonth] = useState(null);
  const [daySelected, setDaySelected] = useState(dayjs());
  const [allEvents, setAllEvents] = useState([]);
  useEffect(() => {
    if (sidebarCalendarMonth !== null) {
      setMonthNumber(sidebarCalendarMonth);
    }
  }, [sidebarCalendarMonth]);
  return (
    <GlobalContext.Provider
      value={{
        monthNumber,
        setMonthNumber,
        sidebarCalendarMonth,
        setSidebarCalendarMonth,
        daySelected,
        setDaySelected,
        allEvents,
        setAllEvents,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}

export default ContextWrapper;
