import React from "react";

const UserGreeting = () => {
  return <h2>Welcome Mr.</h2>;
};

const GuestGreeting = () => {
  return <h2>Please Sign In.</h2>;
};

const Greeting = ({ isLoggedIn }) => {
  return <div>{isLoggedIn ? <UserGreeting /> : <GuestGreeting />}</div>;
};

export default Greeting;
