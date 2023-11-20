//!Задача №12
// Ігровий автомат. Випадково вибираємо зображення у 3 позиціях. Вибір у кожній позиції вибирається як одне з чотирьох зображень. Вивести ці зображення і повідомити виграш користувача (три перших зображення 100 грн, три других – 200, три третіх – 500, три четвертих зображення – 1000грн). Використати цикли і switch (для вибору зображення за номером).
const FRUIT_START = 1,
  FRUIT_END = 4;
let sum = 0;

for (let i = 1; i <= 3; i++) {
  let numImg =
    FRUIT_START + Math.floor(Math.random() * (FRUIT_END - FRUIT_START + 1));
  document.write(
    `<img src="./img/img${numImg}.jpg" style="width: 70px; height: 70px; margin-bottom: 15px;">`
  );
  sum += Math.pow(10, numImg - 1);
}
let money = 0;
switch (sum) {
  case 3:
    money = 100;
    break;
  case 30:
    money = 200;
    break;
  case 300:
    money = 500;
    break;
  case 3000:
    money = 1000;
    break;
}
document.write(`<h2>Ваш виграш ${money}$</h2>`);
