// Array.prototype.push()
// Метод push() додає один або декілька елементів
// в кінець масиву і повертає нову довжину масиву

const colors = ['yellow', 'blue', 'pink'];

const count = colors.push('green');

console.log(count);
// expected output: 4

console.log(colors);
// expected output: [ 'yellow', 'blue', 'pink', 'green' ]
