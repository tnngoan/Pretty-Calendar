import React, { useState, useEffect } from "react";
import EventCard from "./EventCard";
import dayjs from "dayjs";
var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);
const formatForm = "DD-MM-YYYY";
const today = dayjs().format(formatForm);
const data = require("../../api/data.json");

function SidebarEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getTodayEvents();
  }, []);

  function getAllEvents() {
    let futureEvents = data.filter((event) => {
      return dayjs().isAfter(dayjs(event.event_time)) === false;
    });

    futureEvents = futureEvents.sort(function (a, b) {
      a = dayjs(a.event_time);
      b = dayjs(b.event_time);
      return a.diff(today) - b.diff(today);
    });

    setEvents(futureEvents);
  }

  const getTodayEvents = async () => {
    const todayEvents = data.filter((event) => {
      return dayjs(event.event_time).format(formatForm) === today;
    });
    setEvents(todayEvents);
  };

  return (
    <div className="px-4 bg-red-200">
      <div className="flex align-baseline justify-between">
        <h3 className="font-bold text-blue-800 text-xl">Upcoming Events</h3>
        <button
          onClick={getAllEvents}
          className="py-2 px-4 text-xs text-gray-100 rounded-3xl bg-blue-700"
        >
          View all
        </button>
      </div>
      <div className="pb-4">
        <p className="text-md">Today, 1 Jan</p>
      </div>
      {events.map((event) => (
        <EventCard
          key={event.id}
          title={event.event_title}
          time={event.event_time}
        />
      ))}
      {console.log(events)}
    </div>
  );
}
export default SidebarEvents;
