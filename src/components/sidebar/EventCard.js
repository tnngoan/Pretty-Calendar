import React from "react";
import dayjs from "dayjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import getRandom from "../../utils/getRandom";
const colorList = [
  "lightBlue",
  "darkBlue",
  "lightOrange",
  "darkOrange",
  "red-100",
  "red-400",
];
const newColors = getRandom(colorList);
console.log(newColors);
function EventCard(props) {
  const event = props.event;
  console.log(event.type);
  function handleClick() {
    prompt("Connecting to Camera and Audio!");
  }
  return (
    <React.Fragment>
      {event.type === 0 ? (
        <div className="border border-gray-300 p-4 my-2 rounded-lg border-l-8 border-l-orange-400 bg-blue-200">
          <h3 className="text-ellipsis overflow-hidden no-wrap font-bold text-blue-900">
            Appointment: {event.name}
          </h3>
          <p className="text-blue-700 text-xs pt-2">
            {dayjs(event.date).format("DD-MM-YYYY")}
          </p>
        </div>
      ) : (
        <div className="flex flex-col border border-gray-300 rounded-lg border-l-8 border-l-orange-400 my-2 p-4 pb-0">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-ellipsis overflow-hidden no-wrap font-bold text-blue-900">
                Webinar: {event.name}
              </h3>
              <p className="text-blue-700 text-xs pt-2">
                {dayjs(event.date).format("DD-MM-YYYY")}
              </p>
            </div>
            <div className="rounded-full bg-blue-400 py-2 px-3 ml-2">
              <FontAwesomeIcon
                icon={faVideo}
                className="cursor-pointer text-white"
                onClick={handleClick}
              />
            </div>
          </div>
          <div className="flex items-center">
            <div className="py-3 pr-3 text-3xl">
              <FontAwesomeIcon icon={faUserCircle} className="text-md" />{" "}
            </div>

            <p className="text-xs text-center align-center">
              <a href={event.link_to_memitrovicj}>Click to meet</a>
            </p>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default EventCard;
