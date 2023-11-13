import React, { useState } from "react";

const NumberOfEvents = ({ setCurrentNOE }) => {
  const [value, setValue] = useState(32);

  const handleInput = (e) => {
    const newValue = e.target.value.replace(/\D/g, "");
    setValue(newValue);
    setCurrentNOE(newValue);
  };

  return (
    <div id="number-of-events">
      <label htmlFor="event-numbers" className="number-of-events-label">
        Number of Events:{" "}
      </label>
      <input
        type="textbox"
        className="event-numbers"
        value={value}
        onChange={handleInput}
        maxLength={3}
        placeholder="how many events do you want to see?"
      />
    </div>
  );
};

export default NumberOfEvents;
