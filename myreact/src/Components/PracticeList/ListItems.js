import React from "react";

const ListItems = () => {
  const array = [1, 2, 3, 4, 5];
  let li = array.map(arr => <li key={Math.random()}>arr</li>)
  return (
    <>
      <ul>
        {li}
      </ul>
    </>
  );
};

export default ListItems;
