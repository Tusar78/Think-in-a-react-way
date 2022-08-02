import Emoji from "../Inheritance/Emoji";

class Text extends Emoji {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  
  render() {
    const decoratedText = this.adEmoji('Hello World', '📙')
    return super.render(decoratedText)    
  }

}

export default Text;