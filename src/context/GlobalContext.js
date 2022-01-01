import React from "react";

const GlobalContext = React.createContext({
  monthNumber: 0,
  setMonthNumber: (number) => {},
  sidebarCalendarMonth: 0,
  setSidebarCalendarMonth: (number) => {},
  daySelected: null,
  setDatSelected: (day) => {},
});

export default GlobalContext;
