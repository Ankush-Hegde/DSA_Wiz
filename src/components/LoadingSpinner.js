import React from "react";

import LoadingSpinnerGIF from "../lib/assets/gif/BlackLoadingSpinner.gif"

function LoadingSpinner() {
  return (
    <div className="loading-spinner-component">
      <img src={LoadingSpinnerGIF} alt="Loading..." />
    </div>
  );
}

export default LoadingSpinner;