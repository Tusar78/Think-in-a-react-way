import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {
  const [cosmetics, setCosmetics] = useState([]);
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setCosmetics(data))
  }, [])
  return (
    <div>
      <h2>Collection of Cosmetics:</h2>
      {
        cosmetics.map(cosmetic => <Cosmetic cosmetic={cosmetic} />)
      }
    </div>
  );
};

export default Cosmetics;