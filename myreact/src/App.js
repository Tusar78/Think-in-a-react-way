import React from "react";

const formatUser = user => {
  return `${user.firstName} ${user.lastName}` 
}

const user = {
  firstName: 'Tusar',
  lastName: 'Ali'
}

const App = () => {  
  return <h2>{formatUser(user)}.</h2>;
};

export default App;
