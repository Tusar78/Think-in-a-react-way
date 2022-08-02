import React from "react";

const Click = ({count, incrementCount}) => {
  return (
    <div style={{ margin: "1rem" }}>
      <button onClick={incrementCount}> Clicked: {count}</button>
    </div>
  );
};

export default Click;
