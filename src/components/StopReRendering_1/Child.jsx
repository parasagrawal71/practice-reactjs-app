import React, { useEffect } from "react";
import { useRenderCount } from "../../common/useRenderCount";
import DisplayRenderCount from "../../common/DisplayRenderCount";
import BoxWrapper from "../../common/BoxWrapper";

const Child = () => {
  const COMP_ID = "Child Component";
  const renderCount = useRenderCount(COMP_ID);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(() => {
        console.log(`${COMP_ID}: Data fetched`);
      })
      .catch(() => {
        console.log(`${COMP_ID}: Error fetching data`);
      });
  }, []);

  return (
    <BoxWrapper>
      <h4>
        {COMP_ID} <DisplayRenderCount renderCount={renderCount} />
      </h4>

      {/* <div>{console.log(`${COMP_ID} called`)}</div> */}
    </BoxWrapper>
  );
};

export default Child;
