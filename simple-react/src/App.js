import './App.css';
import Emoji from './Component/Inheritance/Emoji';
import Text from './Component/Testing/Text';

function App() {
  return (
    <>
      <Emoji>
        {
          ({addEmoji}) => <Text adEmoji={addEmoji} />
        }
      </Emoji>
    </>
  );
}

export default App;
