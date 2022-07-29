import React from "react";

const Cosmetic = ({ cosmetic }) => {
  const { _id, name, balance } = cosmetic;
  const adToCart = (id) => {
    localStorage.setItem(id, 1)
  }
  return (
    <div className="display__input">
      <h3>Product name: {name}</h3>
      <p>Price: {balance}</p>
      <small>It's id: {_id}</small>
      <br />
      <button onClick={() => adToCart(_id)}>Ad to cart</button>
    </div>
  );
};

export default Cosmetic;
