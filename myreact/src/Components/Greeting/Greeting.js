import React from 'react';

const UserGreeting = (props) => {
  return <h2>Welcome back!</h2>
}

const GuestGreeting = (props) => {
  return <h2>Please Sign In.</h2>
}

const Greeting = ({isLoggedIn}) => {
  if (isLoggedIn) {
    return <UserGreeting />
  } else {
    return <GuestGreeting />
  }
};

export default Greeting;