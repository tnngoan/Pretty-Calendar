import React from "react";
import dayjs from "dayjs";

function Day({ day }) {
  function daySelected() {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue-700 text-grey-50 w-8 rounded-full"
      : "";
  }
  return (
    <div className="flex flex-col border">
      <div className="flex flex-col items-center">
        <p className={`text-md p-1 my-2 mt-4 text-center ${daySelected()}`}>
          {day.format("DD")}
        </p>
      </div>
    </div>
  );
}

export default Day;
