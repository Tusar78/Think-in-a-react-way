import React from 'react';

const Cosmetics = () => {
  const cosmetics = [
    {id: 1, name: 'Alta', price: 1200},
    {id: 2, name: 'Palish', price: 2200},
    {id: 3, name: 'Balish', price: 1700},
    {id: 4, name: 'Malish', price: 900},
    {id: 5, name: 'Nalish', price: 200},
  ]
  return (
    <div>
      <h2>Collection of Cosmetics:</h2>
      {
        cosmetics.map(cosmetic => console.log(cosmetic))
      }
    </div>
  );
};

export default Cosmetics;