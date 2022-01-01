import React, { useState, useEffect, useContext } from "react";
import getMonth from "../../utils/getMonth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dayjs from "dayjs";
import GlobalContext from "../../context/GlobalContext";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

export default function SidebarCalendar() {
  const [currentMonthNumber, setCurrentMonthNumber] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(getMonth());

  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthNumber));
  }, [currentMonthNumber]);

  const { monthNumber, setSidebarCalendarMonth, setDatSelected } =
    useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonthNumber(monthNumber);
  }, [monthNumber]);

  function prevMonth() {
    setCurrentMonthNumber(currentMonthNumber - 1);
  }

  function nextMonth() {
    setCurrentMonthNumber(currentMonthNumber + 1);
  }

  function daySelected(day) {
    const formatForm = "DD-MM-YY";
    const currentDay = dayjs().format(formatForm);
    const selectedDay = day.format(formatForm);
    return currentDay === selectedDay
      ? "bg-blue-700 rounded-full text-gray-100"
      : "";
  }
  return (
    <div className="w-72 p-6">
      <header className="flex justify-between items-center pt-3">
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="px-4 cursor-pointer"
          onClick={prevMonth}
        />
        <div>
          <p className="">
            {dayjs(new Date(dayjs().year(), currentMonthNumber)).format(
              "MMMM YYYY"
            )}
          </p>
        </div>
        <FontAwesomeIcon
          icon={faChevronRight}
          className="px-4 cursor-pointer"
          onClick={nextMonth}
        />
      </header>
      <div className="grid grid-cols-7 grid-rows-6 py-4">
        {currentMonth[0].map((day, i) => (
          <span key={i} className="text-sm py-1 text-center">
            {day.format("dd").charAt(0)}
          </span>
        ))}
        {currentMonth.map((week, i) => (
          <React.Fragment key={i}>
            {week.map((day, id) => (
              <button
                onClick={() => {
                  setSidebarCalendarMonth(currentMonthNumber);
                  setDatSelected(day);
                }}
                key={id}
                className={`py-1 w-full ${daySelected(day)}`}
              >
                <span className="text-sm">{day.format("D")}</span>
              </button>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
