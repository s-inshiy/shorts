// Array.prototype.map();
// Метод map() створює новий масив, який заповнюється
// результатами виклику наданої функції
// для кожного елемента масиву

const numbers = [1, 4, 9];

const result = numbers.map(
  (number) => number * 2
);

console.log(result);

// expected output: [2, 8, 18]
