import React from "react";

const formatUser = (user) => {
  return `${user.firstName} ${user.lastName}`;
};

const user = {
  firstName: "Tusar",
  lastName: "Ali",
};

const getGreeting = (user) => {
  if (user) {
    return <h1>Hello, {formatUser(user)}</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
};

const App = () => {
  return <div>{getGreeting(user)}</div>;
};

export default App;
