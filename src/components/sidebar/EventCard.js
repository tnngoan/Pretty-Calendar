import React from "react";
import dayjs from "dayjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { message } from "antd";
function EventCard(props) {
  const event = props.event;

  function handleClick() {
    message.info(`Starting video call...`);
  }

  function applyColor(str) {
    if (event.name.length === 9) {
      return "bg-lightOrange border-l-darkBlue text-darkBlue";
    } else if (event.name.length > 9) {
      return "bg-lightBlue border-l-darkOrange text-white";
    } else {
      return "border-l-lightBlue bg-darkOrange text-darkBlue";
    }
  }

  return (
    <React.Fragment>
      {event.type === 0 ? (
        <div
          className={`border border-gray-100 p-4 my-2 rounded-lg border-l-8 ${applyColor(
            event.name
          )}`}
        >
          <h3 className="text-ellipsis overflow-hidden wrap font-bold">
            Webinar: {event.name}
          </h3>
          <p className="text-xs pt-2">
            {dayjs(event.date).format("DD-MM-YYYY")}
          </p>
        </div>
      ) : (
        <div
          className={`flex flex-col border border-gray-100 rounded-lg border-l-8 my-2 p-4 pb-0 ${applyColor(
            event.name
          )}`}
        >
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-ellipsis overflow-hidden no-wrap font-bold">
                Appointment: {event.name}
              </h3>
              <p className="text-xs pt-2">
                {dayjs(event.date).format("DD-MM-YYYY")}
              </p>
            </div>
            <div className="cursor-pointer rounded-full bg-blue-400 py-2 px-3 ml-2">
              <FontAwesomeIcon
                icon={faVideo}
                // className="text-white"
                onClick={handleClick}
              />
            </div>
          </div>
          <div className="flex items-center">
            <div className="py-3 pr-3 text-3xl w-10">
              <img
                alt={event.include.email}
                src={props.img}
                className="w-full rounded-full"
              />
            </div>
            <p className="text-xs text-center align-center cursor-pointer tracking-wider underline">
              <a className="text-gray-700" href={event.link_to_meet}>View Client Profile</a>
            </p>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default EventCard;
