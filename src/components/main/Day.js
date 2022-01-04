import React, { useState, useContext, useEffect } from "react";
import GlobalContext from "../../context/GlobalContext";
import dayjs from "dayjs";
import { message } from "antd";
const formatForm = "DD-MM-YY";
const data = require("../../api/data.json");

function Day({ day }) {
  const [events, setEvents] = useState([]);
  const { monthNumber } = useContext(GlobalContext);

  useEffect(() => {
    function findEvents() {
      let newEvents = data.filter((event) => {
        return (
          dayjs(event.date).format(formatForm) === dayjs(day).format(formatForm)
        );
      });
      newEvents = newEvents.sort(function (a, b) {
        a = dayjs(a.date);
        b = dayjs(b.date);
        return a.diff(day) - b.diff(day);
      });
      const topEvents = newEvents.slice(0, 2);
      setEvents(topEvents);
    }
    findEvents();
  }, [monthNumber, day]);

  function daySelected() {
    return day.format(formatForm) === dayjs().format(formatForm)
      ? "bg-lightBlue text-gray-100 w-8 rounded-full"
      : "";
  }

  function addEvent() {
    message.info(`Feature coming...`);
  }

  return (
    <div className="flex flex-col border">
      <div className="flex flex-col items-center">
        {events == null ? (
          <p
            onClick={addEvent}
            className={`text-md p-1 px-2 my-2 text-center ${daySelected()} hover:bg-gray-200 hover:rounded-full cursor-pointer`}
          >
            {day.format("DD")}
          </p>
        ) : (
          <React.Fragment>
            <p
              onClick={addEvent}
              className={`text-md p-1 px-2 my-1 text-center ${daySelected()} hover:bg-gray-200 hover:rounded-full cursor-pointer`}
            >
              {day.format("DD")}
            </p>
            <li className="text-xs list-none text-center">
              {events.map((event) => (
                <ul onClick={addEvent} key={event.id}>
                  <p className="overflow-hidden truncate w-28 flex-1 bg-blue-300 py-1 px-1 rounded-sm cursor-pointer border border-gray-200 border-l-black">
                    {event.name}
                  </p>
                </ul>
              ))}
            </li>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

export default Day;
