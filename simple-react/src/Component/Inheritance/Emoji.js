import React, { Component } from 'react';

class Emoji extends Component {
  adEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`;

  render() {
    return (
      this.props.children({addEmoji: this.adEmoji})
    );    
  }
}

export default Emoji;