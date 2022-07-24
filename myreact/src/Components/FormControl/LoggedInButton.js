import React from 'react';

const LoggedInButton = ({onClick}) => {
  return (
    <button onClick={onClick}>
      Login
    </button>
  );
};

export default LoggedInButton;