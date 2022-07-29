import React from "react";
import { fakeDB } from "../../utilities/fakedb";

const Cosmetic = ({ cosmetic }) => {
  const { _id, name, balance } = cosmetic;
  const adToCart = (id) => {
    fakeDB(id)
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
