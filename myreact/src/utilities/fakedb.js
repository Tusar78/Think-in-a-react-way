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

  const storedCart = localStorage.getItem('shopping-cart');
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }

  // Added Quantity
  const quantity = shoppingCart[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  } else {
    shoppingCart[id] = 1;
  }
  localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
};

const deleteCart = (id) => {
  const storedCart = localStorage.getItem('shopping-cart');
  const shoppingCart = JSON.parse(storedCart);
  if (id in shoppingCart) {
    delete shoppingCart[id];
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
  }
}

export { fakeDB, deleteCart };
