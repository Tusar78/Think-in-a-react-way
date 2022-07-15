const domContainer = document.querySelector("#root");

const Increment = () => {
  const [count, setCount] = React.useState(0);
  const incC = () => setCount(count + 1);
  return (
    <div className="container">
      <div className="increment-container">
        <h1 id="count">{count}</h1>
        <div>
          <button onClick={incC} id="increased">Increment+</button>
        </div>
      </div>
    </div>
  );
};


ReactDOM.render(<>
  <Increment></Increment>
  <Increment></Increment>
  <Increment></Increment>
</>, domContainer);

// let count = 0;

// const increasedBtn = document.getElementById('increased');
// const countValue = document.getElementById('count');

// increasedBtn.addEventListener('click', e => {
//   count++;
//   console.log(count);
//   countValue.textContent = count;
// })




