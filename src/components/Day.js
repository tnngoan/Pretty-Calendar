import React from "react";
import dayjs from "dayjs";

function Day({ day, rowNumber }) {
  function daySelected() {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue-700 text-grey-50 rounded-full w-7"
      : "";
  }
  return (
    <div className="flex flex-col border-1">
      <div className="flex flex-col items-center">
        {rowNumber === 0 && (
          <p className="">{day.format("ddd").toUpperCase()}</p>
        )}
        <div>
          <p className={`text-sm p-1 my-1 text-center ${daySelected()}`}>
            {day.format("DD")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Day;
