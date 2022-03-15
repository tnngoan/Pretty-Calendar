import dayjs from "dayjs";
import React from "react";

const GlobalContext = React.createContext({
  monthNumber: 0,
  setMonthNumber: (number) => {},
  sidebarCalendarMonth: 0,
  setSidebarCalendarMonth: (number) => {},
  daySelected: dayjs(),
  setDaySelected: (day) => {},
  allEvents: [],
  setAllEvents: (events) => {},
});

export default GlobalContext;
