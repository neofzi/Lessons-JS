//!Задача №4
// Дано масив чисел. Видаліть всі від'ємні числа і створіть новий масив без них.
let numbers = [5, -12, 8, -17, 6, -3, 0, 10];
let plusNumber = [];
numbers.forEach((element) => {
  if (element >= 0) plusNumber.push(element);
});
document.write(`${plusNumber}`);
