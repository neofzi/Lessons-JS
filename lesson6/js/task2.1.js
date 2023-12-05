//!Задача №2.1
// З клавіатури поступово вводяться символи поки не буде введено символ «а». Вивести рядок символів у зворотному порядку.
let userSymbol;
let reversedResult = "";
do {
  userSymbol = prompt("Введіть символ");
  if (userSymbol !== "a") {
    reversedResult += userSymbol;
    alert("Введено не правильне число");
  } else {
    alert("Введено 0. Завершуємо введення чисел");
  }
} while (userSymbol !== "a");
let reversedString = reversedResult.split("").reverse().join("");
document.write(`Ваші символи: ${reversedString}`);
