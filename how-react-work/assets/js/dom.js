// Batch update more than faster
let arr = [];
let increment = 0;
const container = document.querySelector('.container');

// while (increment < 10000) {
//   arr.push(++increment);
// }

// container.innerText = arr.join(' ');

// Slow way

while (increment < 10000) {
  increment++;
  container.innerHTML += ' ' + increment;
}