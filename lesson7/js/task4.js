//!Задача №4
// Створити функцію, яка для 3 заданих чисел знаходить одночасно декілька результатів: кількість парних, кількість додатних, кількість більших за 100.
function getNumEven(num1, num2, num3) {
  let even = 0;
  if (num1 % 2 === 0) {
    even++;
  }
  if (num2 % 2 === 0) {
    even++;
  }
  if (num3 % 2 === 0) {
    even++;
  }
  return even;
}
function getPositiveNumbers(num1, num2, num3) {
  let positive = 0;
  if (num1 > 0) {
    positive++;
  }
  if (num2 > 0) {
    positive++;
  }
  if (num3 > 0) {
    positive++;
  }
  return positive;
}
function getBigNumbers(num1, num2, num3) {
  let big = 0;
  if (num1 > 100) {
    big++;
  }
  if (num2 > 100) {
    big++;
  }
  if (num3 > 100) {
    big++;
  }
  return big;
}

let userNumber1 = parseFloat(prompt("Введіть перше число"));
let userNumber2 = parseFloat(prompt("Введіть друге число"));
let userNumber3 = parseFloat(prompt("Введіть третє число"));

document.write(
  `Парні числа: ${getNumEven(
    userNumber1,
    userNumber2,
    userNumber3
  )} <br> Додатні числа: ${getPositiveNumbers(
    userNumber1,
    userNumber2,
    userNumber3
  )} <br> Більших за 100: ${getBigNumbers(
    userNumber1,
    userNumber2,
    userNumber3
  )}`
);
