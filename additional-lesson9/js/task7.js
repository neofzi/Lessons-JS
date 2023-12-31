//!Задача №7
// Знайдіть суму всіх елементів в масиві.
let numbers = [5, 12, 8, 3, 9];
let sum = 0;
numbers.forEach((element) => {
  sum += element;
});
document.write(`${sum}`);
