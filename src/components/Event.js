import React from "react";
import { useState } from "react";

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <li className="event">
      <h3>{event.summary}</h3>
      <p>{event.location}</p>
      <p>{event.start.dateTime}</p>
      <button
        className="details-btn"
        onClick={() => {
          setShowDetails(!showDetails);
        }}
      >
        {showDetails ? "Hide Details" : "Show Details"}
      </button>
      {showDetails ? (
        <div className="details">
          <h4>Event Details</h4>
          <p> {event.description}</p>
          <p>Event created: {event.created}</p>
        </div>
      ) : null}
    </li>
  );
};

export default Event;
