import React from "react";
import StopReRendering_1 from "./StopReRendering_1/Parent";
import { TOGGLE_COMPONENTS } from "../config/config";

const Home = () => {
  return (
    <div style={{ padding: "1rem" }}>
      <div>Home</div>

      {/* Components */}
      {TOGGLE_COMPONENTS.StopReRendering_1 && <StopReRendering_1 />}
    </div>
  );
};

export default Home;
