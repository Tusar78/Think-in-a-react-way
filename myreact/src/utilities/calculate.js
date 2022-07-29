const add = (num1, num2) => {
  return num1 + num2;
};

const multiply = (num1, num2) => {
  return num1 * num2;
};

const numbers = [5, 7, 8, 6, 9, 4];
const reducedArray = numbers.reduce((previousNumber, currentNumber) => {
  return previousNumber + currentNumber;
}, 0);
console.log(reducedArray);

export { add, multiply, reducedArray };
