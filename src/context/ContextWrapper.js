import React, { useState, useEffect } from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";

function ContextWrapper(props) {
  const [monthNumber, setMonthNumber] = useState(dayjs().month());
  const [sidebarCalendarMonth, setSidebarCalendarMonth] = useState(null);
  const [daySelected, setDatSelected] = useState(null);
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
        setDatSelected
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}

export default ContextWrapper;
