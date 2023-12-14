//!Задача №3
// Створити окремі функції, які для 4 чисел знаходять:
// 1)суму;
// 2)добуток;
// 3)середнє арифметичне;
// 4)мінімальне значення.
function getSumOfNumbers(num1, num2, num3, num4) {
  return num1 + num2 + num3 + num4;
}
function getProductOfNumbers(num1, num2, num3, num4) {
  return num1 * num2 * num3 * num4;
}
function getArithmeticMeanOfNumbers(num1, num2, num3, num4) {
  return (num1 + num2 + num3 + num4) / 4;
}
function getMinimumNumbers(num1, num2, num3, num4) {
  let min = num1;
  if (num2 < min) min = num2;
  if (num3 < min) min = num3;
  if (num4 < min) min = num4;
  return min;
}

let userNumber1 = parseFloat(prompt("Введіть перше число"));
let userNumber2 = parseFloat(prompt("Введіть друге число"));
let userNumber3 = parseFloat(prompt("Введіть третє число"));
let userNumber4 = parseFloat(prompt("Введіть четверте число"));
let sum = getSumOfNumbers(userNumber1, userNumber2, userNumber3, userNumber4);
let product = getProductOfNumbers(
  userNumber1,
  userNumber2,
  userNumber3,
  userNumber4
);
let arithmeticMean = getArithmeticMeanOfNumbers(
  userNumber1,
  userNumber2,
  userNumber3,
  userNumber4
);
let minNum = getMinimumNumbers(
  userNumber1,
  userNumber2,
  userNumber3,
  userNumber4
);

document.write(
  `Сума: ${sum} <br> Добуток: ${product} <br> Середнє арифментичне: ${arithmeticMean} <br> Мінімальне число: ${minNum}`
);
