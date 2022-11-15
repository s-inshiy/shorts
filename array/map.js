// Array.prototype.map();

// Метод map() створює новий масив, який заповнюється
// результатами виклику наданої функції
// для кожного елемента масиву

const items = [
  { name: 'Book', price: 20 },
  { name: 'Computer', price: 310 },
  { name: 'Phone', price: 270 },
  { name: 'TV', price: 180 },
  { name: 'Bike', price: 490 },
];

function getItemName(item) {
  return item.name;
}
const itemNames = items.map(getItemName);

console.log(itemNames);
