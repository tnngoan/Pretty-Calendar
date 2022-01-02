import React from "react";
import dayjs from "dayjs";
const formatForm = "DD-MM-YY";

function Day({ day }) {
  function daySelected() {
    return day.format(formatForm) === dayjs().format(formatForm)
      ? "bg-blue-700 text-grey-50 w-8 rounded-full"
      : "";
  }
  function addEvent() {
    return alert("Add new event!")
  }

  return (
    <div className="flex flex-col border">
      <div className="flex flex-col items-center">
        <p
          onClick={addEvent}
          className={`text-md p-1 px-2 my-2 mt-4 text-center ${daySelected()} hover:bg-gray-200 hover:rounded-full cursor-pointer`}
        >
          {day.format("DD")}
        </p>
      </div>
    </div>
  );
}

export default Day;
