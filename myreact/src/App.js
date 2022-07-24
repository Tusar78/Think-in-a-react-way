import React from "react";
import './App.css'
import Mailbox from "./Components/Mailbox/Mailbox";

const App = () => {
  const message = ['React', 'Redux', 'Svelte', 'ES2021']
  return (
    <>
      <Mailbox message={message} />
    </>
  );
};

export default App;
