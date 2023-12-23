//!Задача №8
// Дано одновимірний масив, у якому зберігається певна виграшна сума (елементи заповнюються випадковим чином значеннями від -500 до 500). Надаючи користувачу можливість вибирати номери елементів  (поки він не відмовиться). Знаходити сумарний виграш.
function getArray(min, max, num) {
  let numberGame = [];
  for (let i = 0; i < num; i++) {
    const RANDOM_NUM = min + Math.floor(Math.random() * (max - min + 1));
    numberGame.push(RANDOM_NUM);
  }
  return numberGame;
}
let numberGame = getArray(-500, 500, 10);
alert(numberGame);
function getWinGame(numberGame) {
  let winMoney = 0;
  let userNumber;
  do {
    userNumber = parseInt(
      prompt("Введіть число від 0 до 9, або 777 щоб завершити гру")
    );
    winMoney += numberGame[userNumber];
    if (userNumber !== 777) alert(`Ви виграли: ${winMoney}`);
  } while (userNumber !== 777);
  return winMoney;
}
getWinGame(numberGame);
