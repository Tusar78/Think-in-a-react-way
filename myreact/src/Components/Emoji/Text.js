import Emoji from './Emoji';

class Text extends Emoji {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  render() {
    const decorateText = this.addEmoji('I Love JS', '😍')
    return super.render(decorateText)
    
  }
}

export default Text;