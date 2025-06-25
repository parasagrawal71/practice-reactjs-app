import React, { useEffect, useState } from "react";
import { useRenderCount } from "../../common/useRenderCount";
import DisplayRenderCount from "../../common/DisplayRenderCount";
import Child from "./Child";
import BoxWrapper from "../../common/BoxWrapper";
import MainWrapper from "../../common/MainWrapper";

// ****** Inline Child ******
const InlineChild = () => {
  const COMP_ID = "Inline Child Component";
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

const InlineChildNode = <InlineChild />;

// ****** Child with Props ******
const ChildWithProps = ({ count }) => {
  const COMP_ID = "Child With Props Component";
  const renderCount = useRenderCount(COMP_ID);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(() => {
        console.log(`${COMP_ID}: Data fetched for count ${count}`);
      })
      .catch(() => {
        console.log(`${COMP_ID}: Error fetching data`);
      });
  }, [count]);

  return (
    <BoxWrapper>
      <h4>
        {COMP_ID} <DisplayRenderCount renderCount={renderCount} />
      </h4>

      <p>Count: {count}</p>

      {/* <div>{console.log(`${COMP_ID} called`)}</div> */}
    </BoxWrapper>
  );
};

const ChildWithPropsNode = <ChildWithProps count={0} />;

// ****** Parent ******
function ParentComponent() {
  const COMP_ID = "Parent Component";
  const [count, setCount] = useState(0);
  const renderCount = useRenderCount(COMP_ID);

  return (
    <MainWrapper>
      <h3>Title: InlineChildNode with no props</h3>
      <BoxWrapper>
        <h4>
          {COMP_ID} <DisplayRenderCount renderCount={renderCount} />
        </h4>

        <div>
          <button
            onClick={() => {
              setCount(count + 1);
            }}
          >
            Increment
          </button>

          <p>Count: {count}</p>

          {/* Re-renders unnecessarily even though no props passed */}
          <InlineChild />

          {/* Doesn't re-render */}
          {/* {InlineChildNode} */}

          {/* Component re-renders on change of props as expected */}
          {/* <ChildWithProps count={count} /> */}

          {/* Can't pass props from here */}
          {/* {ChildWithPropsNode} */}

          {/* EXTRA: Child component behaviour is same as InlineChild. Re-renders 
        unnecessarily even though no props passed */}
          {/* <Child /> */}
        </div>
      </BoxWrapper>
    </MainWrapper>
  );
}

export default ParentComponent;
