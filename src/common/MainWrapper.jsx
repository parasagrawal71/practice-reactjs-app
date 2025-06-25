import React from "react";

const MainWrapper = ({ children }) => {
  return (
    <main
      style={{ border: "1px solid grey", padding: "1rem", margin: "1rem 0" }}
    >
      {children}
    </main>
  );
};

export default MainWrapper;
