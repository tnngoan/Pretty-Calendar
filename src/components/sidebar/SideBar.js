import React from "react";
import SidebarCalendar from "./SidebarCalendar";
import Event from "./Event";

function SideBar({ month }) {
  return (
    <div className="w-64">
        <SidebarCalendar />
      <div>
          <h3>Up coming events</h3>
          <button>View all</button>
        </div>
        <p>Today, 1 Jan</p>
        <Event />
        <Event />
        <Event />
    </div>
  );
}
export default SideBar;
