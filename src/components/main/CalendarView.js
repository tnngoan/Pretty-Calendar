import React from "react";
import Day from "./Day";

function CalendarView({ month }) {
  return (
    <React.Fragment>
      <div className="flex justify-around text-center py-2 pb-4 bg-white border-x">
        {month[0].map((day, index) => (
          <span key={index} className="text-sm text-center">
            {day.format("ddd").toUpperCase()}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-7 grid-rows-5 flex-1 border-t bg-white">
        {month.map((week, i) => (
          <React.Fragment key={i}>
            {week.map((day, id) => (
              <Day key={id} day={day} rowNumber={i} />
            ))}
          </React.Fragment>
        ))}
      </div>
    </React.Fragment>
  );
}

export default CalendarView;
