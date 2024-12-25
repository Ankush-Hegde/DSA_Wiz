import React from "react";

const LoadingSpinnerGIF = "/assets/gif/BlackLoadingSpinner.gif"

function LoadingSpinner() {
  return (
    <div className="loading-spinner-component">
      <img src={LoadingSpinnerGIF} alt="Loading..." />
    </div>
  );
}

export default LoadingSpinner;