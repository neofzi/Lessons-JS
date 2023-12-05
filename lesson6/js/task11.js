//!Задача №11
// Комп’ютер загадує випадкове число від 1 до 10. Вгадати число шляхом введеня можливих варіантів. В кінці вивести кількість спроб користувача.
const COMPUTER_RANDOM_NUM = 1 + Math.floor(Math.random() * 10);
let userNumber = 0;
let attempt = 1;
do {
  userNumber = parseInt(prompt("Попробуйте вгадати число від 1 до 10"));
  if (userNumber > 10) {
    alert("Будь ласка, введіть коректне число від 1 до 10.");
  } else if (userNumber !== COMPUTER_RANDOM_NUM) {
    alert("Ви не вгадати, спробуйте ще");
    attempt++;
  }
} while (userNumber !== COMPUTER_RANDOM_NUM);
alert(`Вітаю! \nВи вгадали число, вам знадобилось для цього ${attempt} спроб`);
