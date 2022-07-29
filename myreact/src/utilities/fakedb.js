const fakeDB = (id) => {
  const quantity = localStorage.getItem(id);
  if (quantity) {
    console.log('already exist');
  } else {
    console.log('Added new item.');
    localStorage.setItem(id, 1);
  }
}

export {fakeDB}