import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import GlobalContext from "../../context/GlobalContext";
import dayjs from "dayjs";

function NavigationBar() {
  const { monthNumber, setMonthNumber } = useContext(GlobalContext);
  function prevMonth() {
    setMonthNumber(monthNumber - 1);
  }
  function nextMonth() {
    setMonthNumber(monthNumber + 1);
  }
  function getToday() {
    // check if sending the same value to useEffect, if yes turn it to negative
    monthNumber === dayjs().month()
      ? setMonthNumber(monthNumber * -1)
      : setMonthNumber(dayjs().month());
  }
  return (
    <div className="flex justify-between items-center h-20 px-6">
      <div className="flex justify-around flex-shrink items-center text-blue-800">
        <button
          className="px-4 py-1 border-1 border-blue-700 rounded-lg border-2 mr-2"
          onClick={getToday}
        >
          Today
        </button>
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="px-4 cursor-pointer"
          onClick={prevMonth}
        />
        <FontAwesomeIcon
          icon={faChevronRight}
          className="px-4 cursor-pointer"
          onClick={nextMonth}
        />
        <h2 className="px-4 font-semibold text-2xl">
          {dayjs(new Date(dayjs().year(), monthNumber)).format("MMMM YYYY")}
        </h2>
      </div>
      <div>
        <button className="bg-blue-700 p-2 px-4 rounded-xl text-gray-100">
          Month
          <FontAwesomeIcon icon={faChevronDown} className="px-2" />
        </button>
      </div>
    </div>
  );
}

export default NavigationBar;
