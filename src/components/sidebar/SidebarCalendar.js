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

  const { monthNumber, setSidebarCalendarMonth, setDaySelected, daySelected } =
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

  function dayOnSelect(day) {
    const formatForm = "DD-MM-YY";
    const today = dayjs().format(formatForm);
    const currentSelected = day.format(formatForm);
    const selectedDay = daySelected && daySelected.format(formatForm);
    // if today is selected => deep blue
    if (today === currentSelected) {
      return "bg-blue-700 text-gray-100";
    } else if (currentSelected === selectedDay) {
      //if another day is selected => light blue
      return "bg-blue-200 text-blue-800";
    } else {
      // otherwise don't give bg-color
      return "text-gray-500";
    }
  }
  return (
    <div className="px-5 pb-1 bg-white rounded-t-sm border border-gray-200">
      <header className="flex justify-between items-center pt-7">
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="px-4 cursor-pointer text-blue-900"
          onClick={prevMonth}
        />
        <div>
          <p className="font-bold text-blue-900">
            {dayjs(new Date(dayjs().year(), currentMonthNumber)).format(
              "MMMM YYYY"
            )}
          </p>
        </div>
        <FontAwesomeIcon
          icon={faChevronRight}
          className="px-4 cursor-pointer text-blue-900"
          onClick={nextMonth}
        />
      </header>
      <div className="grid grid-cols-7 grid-rows-6 items-stretch p-2">
        {currentMonth[0].map((day, i) => (
          <span key={i} className="text-xs pt-1 text-center">
            {day.format("dd").charAt(0)}
          </span>
        ))}
        {currentMonth.map((week, i) => (
          <React.Fragment key={i}>
            {week.map((day, id) => (
              <button
                onClick={() => {
                  setSidebarCalendarMonth(currentMonthNumber);
                  setDaySelected(day);
                }}
                key={id}
                className={`py-1 align-center w-8 rounded-full ${dayOnSelect(day)}`}
              >
                <span className="text-xs">{day.format("D")}</span>
              </button>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
