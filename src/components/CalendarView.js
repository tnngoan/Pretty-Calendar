import React from "react";
import Day from "./Day";

function CalendarView({ month }) {
  return (
    <div className="grid grid-cols-7 grid-rows-5 flex-1">
      {month.map((week, i) => (
        <React.Fragment key={i}>
          {week.map((day, id) => (
            <Day key={id} day={day} rowNumber={i} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}

export default CalendarView;
