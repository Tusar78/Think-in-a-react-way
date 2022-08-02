import React, { Component } from 'react';

class Emoji extends Component {
  adEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`;

  render(overwrite) {
    let text = 'I am the emoji component';
    if (overwrite) {
      text = overwrite;
    }
    
    return (
      <div>{text}</div>
    );
  }
}

export default Emoji;