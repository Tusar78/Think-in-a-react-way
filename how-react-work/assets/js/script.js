let count = 0;

const increasedBtn = document.getElementById('increased');
const countValue = document.getElementById('count');

increasedBtn.addEventListener('click', e => {
  count++;
  console.log(count);
  countValue.textContent = count;
})
