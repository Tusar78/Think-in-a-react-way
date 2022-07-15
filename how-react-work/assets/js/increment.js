const domContainer = document.querySelector("#root");

const Increment = () => {
  return (
    <div className="container">
      <div className="increment-container">
        <h1 id="count">0</h1>
        <div>
          <button id="increased">Increment+</button>
        </div>
      </div>
    </div>
  );
};


ReactDOM.render(<Increment />, domContainer);

let count = 0;

const increasedBtn = document.getElementById('increased');
const countValue = document.getElementById('count');

increasedBtn.addEventListener('click', e => {
  count++;
  console.log(count);
  countValue.textContent = count;
})




