import React from "react";
import { useState } from "react";

const Event = ({ event }) => {
  // const [detailsVisible, setDetailsVisible] = useState(false);

  // const toggleDetails = () => {
  //   setDetailsVisible(!detailsVisible);
  // };

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
          <p>Description: {event.description}</p>
          <p>Event created: {event.created}</p>
        </div>
      ) : null}
    </li>
  );
};

//      <div>
//      <button onClick={toggleDetails}>
//       {detailsVisible ? "Hide Details" : "Show Details"}
//     </button>
//   {/* <button>Hide Details</button>
//       <button>Show Details</button> */}
//     <li
//         className={`show-details ${
//           detailsVisible ? "details-shown" : "details-hidden"
//         }`}
//       >
//         <h3>{event.summary}</h3>
//         <p>{event.location}</p>
//         <p>{event.start.dateTime}</p>
//         <p>{event.description}</p>
//         <p>{event.created}</p>
//       </li>
//     </div>
//   );
// };

export default Event;
