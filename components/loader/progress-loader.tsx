import React from "react";
import { ProgressBar } from "react-loader-spinner";

const ProgressLoader = () => {
  return (
    <ProgressBar
      height="80"
      width="80"
      ariaLabel="progress-bar-loading"
      wrapperStyle={{}}
      wrapperClass="progress-bar-wrapper"
      borderColor="#FFFFF"
      barColor="#ff9933"
    />
  );
};

export default ProgressLoader;
