import React from "react";
import SidebarEvents from "./SidebarEvents";
import SidebarCalendar from "./SidebarCalendar";
export default function Sidebar() {
  return (
    <React.Fragment className="w-64 px-2 py-4">
      <SidebarCalendar />
      <SidebarEvents />
    </React.Fragment>
  );
}
