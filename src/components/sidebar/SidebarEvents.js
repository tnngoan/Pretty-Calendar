import React, { useState, useEffect, useContext } from "react";
import EventCard from "./EventCard";
import GlobalContext from "../../context/GlobalContext";
import dayjs from "dayjs";
var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);
const formatForm = "DD-MM-YYYY";
const today = dayjs().format(formatForm);
const data = require("../../api/data.json");

function SidebarEvents() {
  const [events, setEvents] = useState([]);
  const { daySelected } = useContext(GlobalContext);

  useEffect(() => {
    getTodayEvents(daySelected.format(formatForm));
  }, [daySelected]);

  function getFutureEvents() {
    let futureEvents = data.filter((event) => {
      return dayjs().isAfter(dayjs(event.date)) === false;
    });
    futureEvents = futureEvents.sort(function (a, b) {
      a = dayjs(a.date);
      b = dayjs(b.date);
      return a.diff(today) - b.diff(today);
    });
    setEvents(futureEvents);
  }

  const getTodayEvents = (daySelected) => {
    const todayEvents = data.filter((event) => {
      return dayjs(event.date).format(formatForm) === daySelected;
    });
    setEvents(todayEvents);
  };

  return (
    <div className="px-4 pt-4 bg-white border border-gray-200 border-t-0">
      <div className="flex align-baseline justify-between">
        <h3 className="font-black text-blue-800 text-xl">Upcoming Events</h3>
        <button
          onClick={getFutureEvents}
          className="py-2 px-4 text-xs text-gray-100 rounded-3xl bg-blue-700"
        >
          View all
        </button>
      </div>
      <div className="pb-4">
        <p className="text-md text-gray-400 font-semibold">
          Today, {dayjs().format("D MMM")}
        </p>
      </div>
      {events.map((event) => (
        <EventCard
          key={event.id}
          event={event}
          img={"https://picsum.photos/200"}
        />
      ))}
    </div>
  );
}
export default SidebarEvents;
