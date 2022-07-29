import React from 'react';

const BoilingVerdict = ({celsius}) => {
  if (celsius >= 100) {
    return <p className='display__input'>The water would boil.</p>
  }
  return <p>The water would not boil.</p>
};

export default BoilingVerdict;