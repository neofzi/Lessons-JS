//!Задача №8
// З клавіатури вводиться число. Знаходити суму цифр до тих пір. Поки сума не стане більшую за 20.
let userNumber;
let sum = 0;
do {
  userNumber = parseFloat(prompt("Введіть число"));
  sum += userNumber;
  alert(`Сума = ${sum}`);
} while (sum < 20);
document.write(`<h2>Сума = ${sum}. Кінець</h2>`);
