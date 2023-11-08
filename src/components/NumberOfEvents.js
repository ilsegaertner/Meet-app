import React from "react";

const NumberOfEvents = () => {
  return (
    <div id="number-of-events">
      <input
        type="number"
        className="event-numbers"
        defaultValue={32}
        role="textbox"
      />
    </div>
  );
};

export default NumberOfEvents;
