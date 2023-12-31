//!Задача №2
// Дано масив чисел. Знайдіть суму всіх парних чисел та створіть масив, який містить тільки парні числа.
let numbers = [5, 12, 8, 17, 6];
// Реалізація завдання тут
let sumEven = 0;
let onlyEvenNum = [];
numbers.forEach((element) => {
  if (element % 2 === 0) {
    sumEven += element;
    onlyEvenNum.push(element);
  }
});
document.write(`Масив парних чисел: ${onlyEvenNum} <br>`);
document.write(`Сума парних чисел: ${sumEven}`);
