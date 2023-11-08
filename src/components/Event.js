import React from "react";
import { useState } from "react";

const Event = ({ event }) => {
  const [detailsVisible, setDetailsVisible] = useState(false);

  const toggleDetails = () => {
    setDetailsVisible(!detailsVisible);
  };

  return (
    <div>
      <button onClick={toggleDetails}>
        {detailsVisible ? "hide details" : "show details"}
      </button>
      {/* <button>Hide Details</button>
      <button>Show Details</button> */}
      <li
        className={`show-details ${
          detailsVisible ? "details-shown" : "details-hidden"
        }`}
      >
        <h3>{event.summary}</h3>
        <p>{event.location}</p>
        <p>{event.start.dateTime}</p>
        <p>{event.description}</p>
        <p>{event.created}</p>
      </li>
    </div>
  );
};

export default Event;
