//!Задача №8
// Задаємо користувачу задачу з додавання двох чисел. Визначити скільки секунд було використано для розв’язання задачі
const time = document.querySelector(".time");
function getRandNum(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}
function example() {
  let num1 = getRandNum(1, 100);
  let num2 = getRandNum(1, 100);
  let start = new Date();
  let answer = num1 + num2;
  let userValue = parseInt(prompt(`${num1} + ${num2}`));
  let end = new Date();
  let elapsedTime = (end - start) / 1000;
  if (answer !== userValue) example();
  else time.innerText = `Час виконання: ${elapsedTime} секунд`;
}
example();
