//!Задача №5
// Тренажер додавання. Кожні 10 секунд користувачу задають випадковий приклад з додавання двох цифр і робиться перевірка.
function getRandomNum(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}
function generateQuestion(min, max) {
  let num1 = getRandomNum(min, max);
  let num2 = getRandomNum(min, max);
  let makeQuestion = parseInt(prompt(`Скільки буде ${num1}+${num2}`));
  checkQuestion(num1, num2, makeQuestion);
}
function checkQuestion(num1, num2, userAnswer) {
  if (userAnswer === num1 + num2) alert("Правильно!");
  else alert(`Не правильно\nПравильна відповідь: ${num1 + num2}`);
  setTimeout(generateQuestion, 10000, 1, 100);
}
setTimeout(generateQuestion, 10000, 1, 100);
