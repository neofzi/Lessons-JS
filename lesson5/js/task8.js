//!Задача №8
// Користувач загадує підсвідомо число. За 3 спроби комп’ютер намагається вгадати число користувача (використати confirm).
const USER_NUMBER = alert("Загадайте число від 1 до 10");
let guessed;
for (let i = 1; i <= 3; i++) {
  const RANDOM_NUM = 1 + Math.floor(Math.random() * 10);
  guessed = confirm(`Ваше число ${RANDOM_NUM}?`);
  if (guessed) {
    alert("Комп'ютер вгадав ваше число!");
    break;
  }
}
if (!guessed) {
  parseInt(prompt("Комп'ютер не вгадав ваше число, ваше число було:"));
}

document.write("<h2>Game over</h2>");
