import React, { useState, useContext, useEffect } from "react";
import GlobalContext from "../../context/GlobalContext";
import dayjs from "dayjs";
const formatForm = "DD-MM-YY";

function Day({ day }) {
  const [events, setEvents] = useState([]);
  const { allEvents, monthNumber } = useContext(GlobalContext);
  useEffect(() => {
    findEvents();
  }, [monthNumber]);

  function daySelected() {
    return day.format(formatForm) === dayjs().format(formatForm)
      ? "bg-blue-700 text-grey-50 w-8 rounded-full"
      : "";
  }

  function addEvent() {
    return alert("Add new event!");
  }

  function findEvents(today) {
    allEvents.filter((event) => {
      return (
        dayjs(event.date).format(formatForm) === dayjs(day).format(formatForm)
      );
    });
    allEvents.sort(function (a, b) {
      console.log(dayjs(a.date).format("HHmmss"));
      return dayjs(a.date).format("HHmmss") - dayjs(b.date).format("HHmmss");
    });
  }

  return (
    <div className="flex flex-col border">
      <div className="flex flex-col items-center">
        <p
          onClick={addEvent}
          className={`text-md p-1 px-2 my-2 text-center ${daySelected()} hover:bg-gray-200 hover:rounded-full cursor-pointer`}
        >
          {day.format("DD")}
        </p>
        <li className="">
          <ul></ul>
        </li>
      </div>
    </div>
  );
}

export default Day;
