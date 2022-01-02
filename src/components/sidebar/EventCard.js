import React from "react";
import dayjs from "dayjs";

function EventCard(props) {
  return (
    <div className="h-auto p-2 border border-gray-300 rounded-lg m-2">
      <h3 className="text-ellipsis truncate overflow-hidden">{props.title}</h3>
      <p>{dayjs(props.date).format("DD-MM-YYYY")}</p>
    </div>
  );
}

export default EventCard;
