//!Задача №15
// Тир. На полі з 10 клітинок розміщують зайця. За один крок заєць може стрибати на відстань від 0 до 3 позицій у будь-якому напрямку. З клавіатури вводиться позиція пострілу. Гра продовжується поки  у користувача не закінчаться патрони (кількість вводиться з клавіатури) або не буде влучання. Спробуйте відоразити гру графічно.
const FIELD_SIZE = 10;
let rabbitPosition = 1 + Math.floor(Math.random() * FIELD_SIZE);
let userShot, stepsOfTheAHere;
let numberOfShots = parseInt(prompt("Введіть кількість снарядів"));
do {
  userShot = parseInt(
    prompt(`Введіть куди хочете зробити постріл (ширина поля ${FIELD_SIZE})`)
  );
  if (userShot > FIELD_SIZE) alert("Ви зробили вистріл мимо поля..");
  else if (userShot !== rabbitPosition) {
    numberOfShots--;
    stepsOfTheAHere = Math.floor(Math.random() * 7) - 3; // -3, до 3
    if (
      rabbitPosition + stepsOfTheAHere >= 1 &&
      rabbitPosition + stepsOfTheAHere <= FIELD_SIZE
    ) {
      rabbitPosition += stepsOfTheAHere;
    }
    alert(
      `Ви не влучили, заєць втік на ${stepsOfTheAHere} клітки в невідомому напрямку \nУ вас залишилось ${numberOfShots} снарядів`
    );
  }
} while (userShot !== rabbitPosition && numberOfShots !== 0);
if (userShot === rabbitPosition) alert("Вітаємо! Ви влучили в зайця.");
else if (numberOfShots === 0) alert("Ви програли, у вас закінчились снаряди");
