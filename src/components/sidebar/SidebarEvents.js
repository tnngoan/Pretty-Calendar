import React, { useState, useEffect } from "react";
import EventCard from "./EventCard";
import dayjs from "dayjs";
const formatForm = "DD-MM-YY";
const today = dayjs().format(formatForm);
const data = require("../../api/data.json");

function SidebarEvents() {
  const [events, setEvents] = useState([null]);

  function getAllEvents() {
    const futureEvents = events.filter((event) => {
      const eventTime = dayjs(event.event_time).format(formatForm);
      return today.diff(eventTime, "day") >= 0;
    });
    setEvents(...events, ...futureEvents);
  }
  useEffect(() => {
    const todayEvents = data.filter((event) => {
      return dayjs(event.event_time).format(formatForm) === today;
    });
    setEvents(todayEvents);
  }, []);

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
      {data.map((event) => (
        <EventCard
          key={event.id}
          title={event.event_title}
          time={event.event_time}
        />
      ))}
    </div>
  );
}
export default SidebarEvents;
