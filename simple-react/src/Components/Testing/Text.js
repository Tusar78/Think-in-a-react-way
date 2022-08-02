import React from "react";

const Text = ({ adEmoji }) => {
  const text = 'I am JavaScript'
  return <div>{adEmoji ? adEmoji('text', '😋') : text}</div>;
};

export default Text;
