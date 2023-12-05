//!Задача №2
// З клавіатури вводитяться числа поки не буде введено 0. Знайти добуток чисел.
let userNumber;
let sum = 1;
do {
  userNumber = parseInt(prompt("Введіть число"));
  if (userNumber !== 0) {
    sum *= userNumber;
    alert("Введено не правильне число");
  } else {
    alert("Введено 0. Завершуємо введення чисел");
  }
} while (userNumber !== 0);
document.write(`Сума чисел: ${sum}`);
