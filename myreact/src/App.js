import React from "react";
import Greeting from "./Components/Greeting/Greeting";

// const comment = {
//   date: new Date(),
//   text: "I hope you enjoy learning React!",
//   author: {
//     name: "Hello Kittu",
//     avatarURL: "http://placekitten.com/g/64/64",
//   },
// };

const App = () => {
  return (
    <>
      <Greeting isLoggedIn={true}></Greeting>
    </>
  );
};

export default App;
