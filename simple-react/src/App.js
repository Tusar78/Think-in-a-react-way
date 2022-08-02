import Click from "./Components/Inner/Click/Click";
import Hover from "./Components/Inner/Hover/Hover";
import User from "./Components/Inner/User/User";

function App() {
  return (
    <>
      <Click />
      <Hover />
      <User name={(isLoggedIn) => isLoggedIn ? 'Tusar' : 'Foinni'}/>
    </>
  );
}

export default App;
