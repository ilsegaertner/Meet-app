import React from "react";
import { useState } from "react";

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);

  const dateTimeString = event.start.dateTime;
  const date = new Date(dateTimeString);
  const formattedDate = date.toLocaleString();

  return (
    <li className="event">
      <h3>{event.summary}</h3>
      <p className="event-location">{event.location}</p>
      {/* <p>{event.start.dateTime}</p> */}
      <p className="event-date">{formattedDate}</p>

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
          {/* <h4>Event Details</h4> */}
          <p> {event.description}</p>
          {/* <p>Event created: {event.created}</p> */}
        </div>
      ) : null}
      <hr />
    </li>
  );
};

export default Event;
