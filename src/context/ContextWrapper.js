import React, { useState } from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";

function ContextWrapper(props) {
  const [monthNumber, setMonthNumber] = useState(dayjs().month());
  return (
    <GlobalContext.Provider value={{ monthNumber, setMonthNumber }}>
      {props.children}
    </GlobalContext.Provider>
  );
}

export default ContextWrapper;
