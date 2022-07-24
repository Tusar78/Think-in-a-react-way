import React from 'react';

const LoggedOutButton = ({onClick}) => {
  return (
    <button onClick={onClick}>
      Logout
    </button>
  );
};

export default LoggedOutButton;