import React from "react";

const GlobalContext = React.createContext({
  monthNumber: 0,
  setMonthNumber: (number) => {},
});

export default GlobalContext;
