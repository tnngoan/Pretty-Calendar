import React, { useEffect, useState } from "react";
import Event from "./EventCard";
const path = "api/data.json";

function SidebarEvents() {
  const [events, setEvents] = useState([null]);

  function getEvents() {
    fetch(path, {
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setEvents(myJson);
      });
  }

  useEffect(() => {
    setEvents(getEvents());
  }, []);
  function showEvents() {
    console.log(events);
  }
  return (
    <div className="px-4 bg-red-200">
      <div className="flex items-baseline justify-between">
        <h3 className="font-bold text-blue-800 text-xl" onClick={showEvents}>
          Upcoming Events
        </h3>
        <button className="py-2 px-4 text-xs text-gray-100 rounded-3xl bg-blue-700">
          View all
        </button>
      </div>
      <p>Today, 1 Jan</p>
      <Event  />
    </div>
  );
}
export default SidebarEvents;
