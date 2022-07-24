import React from 'react';

const Warning = ({isWarning}) => {
  return (
    <div>
      {isWarning ? <div className='banner'>Yes, I am</div> : null}
    </div>
  );
};

export default Warning;