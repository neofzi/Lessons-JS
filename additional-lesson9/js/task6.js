//!Задача №6
// Дано масив чисел. Знайдіть та виведіть найменше число.
let numbers = [8, 2, 10, 4, 6];
// Реалізація завдання тут
let minNumber = numbers[0];
numbers.forEach((element) => {
  if (minNumber > element) minNumber = element;
});
document.write(`${minNumber}`);
