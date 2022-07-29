import React from "react";

const Cosmetic = ({ cosmetic }) => {
  const { _id, name, balance } = cosmetic;
  return (
    <div className="display__input">
      <h3>Product name: {name}</h3>
      <p>Price: {balance}</p>
      <small>It's id: {_id}</small>
    </div>
  );
};

export default Cosmetic;
