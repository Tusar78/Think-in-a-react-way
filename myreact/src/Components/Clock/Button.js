import React from 'react';

const Button = ({onClick, locale}) => {
  return (
    <button onClick={() => onClick(locale)}>
      {
        locale === 'bn-BD' ? 'Change' : 'পরিবর্তন করুন।'
      }
      
    </button>
  );
};

export default Button;