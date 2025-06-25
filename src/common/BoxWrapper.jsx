import React from "react";

// Draws a border around the children with padding and margin
const BoxWrapper = ({ children }) => {
  return (
    <div
      style={{ border: "1px solid #ccc", padding: "1rem", margin: "1rem 0" }}
    >
      {children}
    </div>
  );
};

export default BoxWrapper;
