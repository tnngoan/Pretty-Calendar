import React from "react";

function EventCard(props) {
  return (
    <div className="h-12">
      <h3 className="text-ellipsis truncate overflow-hidden">{props.title}</h3>
      <p>{props.time}</p>
    </div>
  );
}

export default EventCard;
