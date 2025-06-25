import React from "react";

// Displays the passed render count
const DisplayRenderCount = ({ renderCount }) => {
  return (
    <span style={{ fontWeight: "normal" }}>
      (This component has rendered <strong>{renderCount || 0}</strong> times)
    </span>
  );
};

export default DisplayRenderCount;
