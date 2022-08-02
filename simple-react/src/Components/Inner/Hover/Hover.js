import React from 'react';

const Hover = ({count, incrementCount}) => {
  return (
    <div style={{ margin: "1rem" }}>
      <h2 onMouseOver={incrementCount}>Hover me: {count}</h2>
    </div>
  );
};

export default Hover;