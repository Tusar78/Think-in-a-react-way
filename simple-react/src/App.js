import Click from "./Components/Inner/Click/Click";
import Counter from "./Components/Inner/Counter/Counter";
import Hover from "./Components/Inner/Hover/Hover";

function App() {
  return (
    <>
      {/* <User render={(isLoggedIn) => isLoggedIn ? 'Tusar' : 'Foinni'}/> */}
      <Counter render={(count, incrementCount) => <Click count={count} incrementCount={incrementCount} />} />
      <Counter render={(count, incrementCount) => <Hover count={count} incrementCount={incrementCount} />} />
    </>
  );
}

export default App;
