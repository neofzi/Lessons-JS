//!Задача №8
// Знайдіть кількість від'ємних чисел в масиві.
let numbers = [-1, 7, -3, 0, 9, -2];
let negativeNumbers = 0;
numbers.forEach((element) => {
  if (element < 0) negativeNumbers++;
});
document.write(`${negativeNumbers}`);
