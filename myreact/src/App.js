import React from "react";
import Comment from "./Components/Comment/Comment";
import HandleEvent from "./Components/HandleEvent/HandleEvent";

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
      <HandleEvent></HandleEvent>
    </>
  );
};

export default App;
