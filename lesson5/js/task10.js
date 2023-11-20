//!Задача №10
// Знайти суму всіх непарних чисел, що знаходяться між заданими користувачем числами.
const USER_FIRST_NUMBER = parseInt(prompt("Введіть перше число"));
const USER_SECOND_NUMBER = parseInt(prompt("Введіть друге число"));
let startNumber,
  endNumber,
  result = 0;

if (USER_FIRST_NUMBER < USER_SECOND_NUMBER) {
  startNumber = USER_FIRST_NUMBER;
  endNumber = USER_SECOND_NUMBER;
} else {
  startNumber = USER_SECOND_NUMBER;
  endNumber = USER_FIRST_NUMBER;
}

for (let i = startNumber + 1; i < endNumber; i++) {
  if (i % 2 !== 0) result += i;
}
document.write(`<h2>Сума непарних чисел ${result}</h2>`);
