import React from "react";
import dayjs from "dayjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";

function EventCard(props) {
  const event = props.event;
  console.log(event.type);
  function handleClick() {
    alert("Connecting to Camera and Audio!");
  }
  return (
    <React.Fragment>
      {event.type === 0 ? (
        <div className="border border-gray-300 p-4 my-2 rounded-lg border-l-8 border-l-orange-400 bg-blue-200">
          <h3 className="text-ellipsis overflow-hidden no-wrap font-bold text-blue-900">
            {event.name}
          </h3>
          <p className="text-blue-700 text-xs pt-2">
            {dayjs(event.date).format("DD-MM-YYYY")}
          </p>
        </div>
      ) : (
        <div className="flex justify-between items-start h-auto p-4 border border-gray-300 rounded-lg border-l-8 border-l-orange-400 my-2">
          <div className="">
            <h3 className="text-ellipsis overflow-hidden no-wrap font-bold text-blue-900">
              {event.name}
            </h3>
            <p className="text-blue-700 text-xs pt-2">
              {dayjs(event.date).format("DD-MM-YYYY")}
            </p>
          </div>
          <div className="rounded-full bg-blue-400 py-2 px-3">
            <FontAwesomeIcon
              icon={faVideo}
              className="cursor-pointer text-white"
              onClick={handleClick}
            />
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default EventCard;
