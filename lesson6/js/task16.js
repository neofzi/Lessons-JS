//!Задача №16
// Танчики. На полі з 10 клітинок розміщують танк. За один крок танк може переміщуватися на відстань від 0 до 1 у  будь-якому напрямку (в межах поля). При влучанні броня танка пошкоджується на 30 балів (всього 100). Гра продовжується поки або не закінчаться снаряди (кількість вводиться з клавіатури) або не буде влучання. Спробуйте відоразити гру графічно.
const FIELD_SIZE = 10;
let enemyTankArmor = 100,
  userShot,
  randomStep;
let tankPosition = 1 + Math.floor(Math.random() * FIELD_SIZE);
let numberOfShells = parseInt(prompt("Введіть кількість снарядів"));
do {
  userShot = parseInt(
    prompt(
      `Введіть номер клітинки куди хочете зробити постріл (число повинно бути до ${FIELD_SIZE})`
    )
  );
  numberOfShells--;
  if (userShot >= 1 && userShot <= FIELD_SIZE) {
    if (userShot === tankPosition) {
      enemyTankArmor -= 30;
      randomStep = Math.floor(Math.random() * 3) - 1; // -1, 0 або 1
      if (
        tankPosition + randomStep >= 1 &&
        tankPosition + randomStep <= FIELD_SIZE
      ) {
        tankPosition += randomStep;
      }
      alert(
        `Ви попали! \nСуперник тікає на ${randomStep} клітинку! \nУ суперника залишилось ${enemyTankArmor} броні \nУ вас залишилось ${numberOfShells} снаряда`
      );
    } else {
      randomStep = Math.floor(Math.random() * 3) - 1; // -1, 0 або 1
      if (
        tankPosition + randomStep >= 1 &&
        tankPosition + randomStep <= FIELD_SIZE
      ) {
        tankPosition += randomStep;
      }
      alert(
        `Ви не попали! \nСуперник тікає на ${randomStep} клітинку! \nУ вас залишилось ${numberOfShells} снаряда`
      );
    }
  } else {
    alert("Некоректна позиція пострілу. Спробуйте ще раз");
  }
} while (enemyTankArmor >= 0 && numberOfShells > 0);
if (enemyTankArmor <= 0) alert("Вітаємо! Ви знищили ворожий танк");
else if (numberOfShells === 0) alert("Ви програли, у вас закінчились снаряди");
