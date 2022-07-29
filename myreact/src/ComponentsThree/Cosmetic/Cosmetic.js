import React from "react";

const Cosmetic = ({ cosmetic }) => {
  const { id, name, price } = cosmetic;
  return (
    <div>
      <h3>Product name: {name}</h3>
      <p>Price: {price}</p>
      <small>It's id: {id}</small>
    </div>
  );
};

export default Cosmetic;
