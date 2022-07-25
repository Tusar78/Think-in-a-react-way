import React from "react";

const BoilingVerdict = ({ celsius = 0 }) => {
  if (celsius >= 100) {
    return <p className="display__input">Water would be boiled!</p>;
  }
  return <p className="display__input" >Water wouldn't be boiled!</p>;
};

export default BoilingVerdict;
