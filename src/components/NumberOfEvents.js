import React, { useState } from "react";

const NumberOfEvents = () => {
  const [value, setValue] = useState(32);

  const handleInput = (e) => {
    const newValue = e.target.value.replace(/\D/g, "");
    setValue(newValue);
  };

  return (
    <div id="number-of-events">
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
