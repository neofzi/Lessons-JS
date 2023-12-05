//!Задача №4.1
// З клавіатури вводяться два числа N i M (N<M). Вивести а екран числа
let firstNumber = parseInt(prompt("Введіть перше число"));
let secondNumber = parseInt(prompt("Введіть друге число"));
const NUMBER_OF_TIMES = parseInt(
  prompt("Введіть число до якого ви хочете щоб відбувалась операція")
);
while (firstNumber <= NUMBER_OF_TIMES && secondNumber >= -NUMBER_OF_TIMES) {
  document.write(`${firstNumber} ------ ${secondNumber} <br>`);
  firstNumber++;
  secondNumber--;
}
