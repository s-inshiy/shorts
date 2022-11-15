// Array.prototype.forEach()

const items = [
  { name: 'Book', price: 20 },
  { name: 'Computer', price: 310 },
  { name: 'Phone', price: 270 },
  { name: 'TV', price: 180 },
  { name: 'Bike', price: 490 },
];

function logItemPrice(item) {
  console.log(item.price);
}

items.forEach(logItemPrice);

// Метод forEach() виконує надану функцію один
// раз для кожного елементу масиву
