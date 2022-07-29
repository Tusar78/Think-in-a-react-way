import React from 'react';
import { add } from '../../utilities/calculate';

const Shoes = () => {
  const bata = 1520;
  const kase = 1470;
  const total = add(bata, kase);
  return (
    <div>
      <h2>Hello React!</h2>
      <p>Addition: {total} tk.</p>
    </div>
  );
};

export default Shoes;