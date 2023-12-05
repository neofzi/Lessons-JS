//!Задача №11.1
// Комп’ютер загадує два випадкових числа від 1 до 10. Вгадати обидва числа шляхом введеня можливих варіантів. В кінці вивести кількість спроб користувача.
const COMPUTER_RANDOM_NUM1 = 1 + Math.floor(Math.random() * 10);
const COMPUTER_RANDOM_NUM2 = 1 + Math.floor(Math.random() * 10);
let userNumber1 = 0,
  userNumber2 = 0;
let attempt = 1;
do {
  userNumber1 = parseInt(prompt("Попробуйте вгадати перше число від 1 до 10"));
  userNumber2 = parseInt(prompt("Попробуйте вгадати друге число від 1 до 10"));
  if (userNumber1 > 10 || userNumber2 > 10) {
    alert("Будь ласка, введіть коректне число від 1 до 10.");
  } else if (
    userNumber1 !== COMPUTER_RANDOM_NUM1 ||
    userNumber2 !== COMPUTER_RANDOM_NUM2
  ) {
    alert(`Ви не вгадати, спробуйте ще`);
    alert(`${COMPUTER_RANDOM_NUM1} ${COMPUTER_RANDOM_NUM2}`);
    attempt++;
  }
} while (
  userNumber1 !== COMPUTER_RANDOM_NUM1 ||
  userNumber2 !== COMPUTER_RANDOM_NUM2
);
alert(`Вітаю! \nВи вгадали число, вам знадобилось для цього ${attempt} спроб`);
