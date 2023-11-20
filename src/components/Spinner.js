import React from "react";
import { ProgressBar } from "react-loader-spinner";

const Spinner = () => {
  const spinnerStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 9999,
    mixBlendMode: "exclusion",
  };
  return (
    <div className="spinner-container" style={spinnerStyle}>
      <ProgressBar
        height="30"
        width="30"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor="#564f94"
        barColor="#98b36c"
      />
    </div>
  );
};

export default Spinner;
