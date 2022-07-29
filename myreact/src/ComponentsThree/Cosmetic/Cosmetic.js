import React from "react";

const Cosmetic = ({ cosmetic }) => {
  const { _id, name, balance } = cosmetic;
  const adToCart = (balance) => {
    console.log(`This product Balance: ${balance}`);
  }
  return (
    <div className="display__input">
      <h3>Product name: {name}</h3>
      <p>Price: {balance}</p>
      <small>It's id: {_id}</small>
      <br />
      <button onClick={() => adToCart(balance)}>Ad to cart</button>
    </div>
  );
};

export default Cosmetic;
