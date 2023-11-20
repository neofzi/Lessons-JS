//!Задача №9
// Користувач загадує число. Комп’ютер задає питання поки не вгадає число користувача (використати confirm).
const USER_NUMBER = alert("Загадайте число від 1 до 10");
let guessed = false;
while (true) {
  const RANDOM_NUM = 1 + Math.floor(Math.random() * 10);
  guessed = confirm(`Ваше число ${RANDOM_NUM}?`);
  if (guessed) {
    alert("Комп'ютер вгадав ваше число!");
    break;
  }
}
document.write("<h2>Game over</h2>");
