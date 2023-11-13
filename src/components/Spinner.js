import React from "react";
import { ProgressBar } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className="spinner-container">
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
