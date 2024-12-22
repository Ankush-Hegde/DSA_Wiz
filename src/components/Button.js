import React from "react";
import "../styling/components/Button.css";

const Button = ({ onClick, children, loading = false }) => {
  return (
    <button
      onClick={onClick}
      className={`default-button-component ${loading ? "loading" : ""}`}
    >
      {loading && (
        <Text>...</Text>
      )}
      <span className={`button-text ${loading ? 'hidden' : ''}`}>{children}</span>
    </button>
  );
};

export default Button;