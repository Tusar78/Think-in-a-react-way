// const fakeDB = (id) => {
//   const quantity = localStorage.getItem(id);
//   if (quantity) {
//     console.log('already exist');
//     const newQuantity = parseFloat(quantity) + 1;
//     localStorage.setItem(id, newQuantity)
//   } else {
//     console.log('Added new item.');
//     localStorage.setItem(id, 1);
//   }
// }

const fakeDB = (id) => {
  let shoppingCart = {};

  const quantity = shoppingCart[id];
  console.log(quantity);
  if (quantity) {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  } else {
    shoppingCart[id] = 1;
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

export { fakeDB };
