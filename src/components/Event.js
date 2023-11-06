import React from "react";
import { useState } from "react";

const Event = ({ event }) => {
  const [detailsVisible, setDetailsVisible] = useState(false);

  const toggleDetails = () => {
    setDetailsVisible(!detailsVisible);
  };

  return (
    <li>
      <button onClick={toggleDetails}>
        {detailsVisible ? "hide details" : "show details"}
      </button>
      {/* <button>Hide Details</button>
      <button>Show Details</button> */}
      <div className={`show-details ${detailsVisible ? "" : "hide-details"}`}>
        <h3>{event.summary}</h3>
        <p>{event.location}</p>
        <p>{event.start.dateTime}</p>
        <p>{event.description}</p>
        <p>{event.created}</p>
      </div>
    </li> // <li> instead of <div role="listitem"> as <li> elements have role="listitem" by default
  );
};

export default Event;
