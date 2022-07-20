import React from "react";
import Clock from "./Components/Clock/Clock";
import Comment from "./Components/Comment/Comment";

const comment = {
  date: new Date(),
  text: "I hope you enjoy learning React!",
  author: {
    name: "Hello Kittu",
    avatarURL: "http://placekitten.com/g/64/64",
  },
};

const App = () => {
  return (
    <>
      <Comment comment={comment}></Comment>
      <Clock locale="bn-BD"></Clock>
    </>
  );
};

export default App;
