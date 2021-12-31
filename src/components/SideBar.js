import React from "react";
import CalendarView from "./CalendarView";
import Event from "./Event";

function SideBar({ month }) {
  return (
    <div>
      <div className="max-w-20">
        <CalendarView month={month} />
      </div>
      <div>
        <div>
          <h3>Up coming events</h3>
          <button>View all</button>
        </div>
        <p>Today, 1 Jan</p>
        <Event />
        <Event />
        <Event />
      </div>
    </div>
  );
}
export default SideBar;
