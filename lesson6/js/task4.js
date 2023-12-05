//!Задача №4
// З клавіатури поступово вводяться числа. Знайти суму перших N парних чисел.
const NUMBER_OF_EVEN_NUMBERS = parseInt(
  prompt("Введіть кількість чисел яку б ви хотіли згенерувати")
);
let userNumber,
  count = 0,
  sum = 0;

while (count < NUMBER_OF_EVEN_NUMBERS) {
  userNumber = parseInt(prompt("Введіть число"));
  if (userNumber % 2 === 0) {
    sum += userNumber;
    count++;
  } else count++;
}
document.write(`<h2>Сума = ${sum}</h2>`);
