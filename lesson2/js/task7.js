//! Задача №7
// Знайти суму випадкового номера місяця (від 1 до 12) та випадкового номера дня (від 0 до 6).
{
  let minRandomPlace = 1,
    maxRandomPlace = 12;
  let a =
    minRandomPlace +
    Math.floor(Math.random() * (maxRandomPlace - minRandomPlace + 1));
  let minRandomDay = 0,
    maxRandomDay = 6;
  let b =
    minRandomDay +
    Math.floor(Math.random() * (maxRandomDay - minRandomDay + 1));

  document.write(`<h1> Сума чисел = ${a + b} </h1>`);
}
