//!Задача №-2
// Поступово генерувати 100 випадкових чисел від 1 до 1000. Підрахувати яких чисел більше: парних чи непарних.
let evenNumbers = 0;
let oddNumbers = 0;

for (let i = 1; i <= 100; i++) {
  const RANDOM_NUM = 1 + Math.floor(Math.random() * 1000);
  if (RANDOM_NUM % 2 === 0) evenNumbers++;
  else oddNumbers++;
}
document.write(
  `Парні числа = ${evenNumbers} <br> Непарні числа = ${oddNumbers}`
);
