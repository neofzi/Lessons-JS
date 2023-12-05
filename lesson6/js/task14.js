//!Задача №14
// Морський бій. Комп’ютер випадковим чином розміщує одиночний корабель на полі 5*5. З клавіатури поступово вводяться координати пострілу поки корабель не буде потоплено. Спробуйте відоразити гру графічно.
const LOCATION_OF_THE_SHIP1 = 1 + Math.floor(Math.random() * 5);
const LOCATION_OF_THE_SHIP2 = 1 + Math.floor(Math.random() * 5);
let horizontalShot,
  verticalShot,
  attempt = 0;
do {
  horizontalShot = parseInt(
    prompt("Введіть координати по горизонталі куди хочете поцілити")
  );
  verticalShot = parseInt(
    prompt("Введіть координати по вертикалі куди хочете поцілити")
  );

  if (horizontalShot > 5 || verticalShot > 5)
    alert("Ви поцілили мимо грального поля..");
  else if (
    horizontalShot !== LOCATION_OF_THE_SHIP1 ||
    verticalShot !== LOCATION_OF_THE_SHIP2
  ) {
    attempt++;
    alert(`Мимо ${LOCATION_OF_THE_SHIP1} ${LOCATION_OF_THE_SHIP2}`);
  }
} while (
  horizontalShot !== LOCATION_OF_THE_SHIP1 ||
  verticalShot !== LOCATION_OF_THE_SHIP2
);
alert(
  `Ви виграли! \nКорабіль був потоплений на координатах ${LOCATION_OF_THE_SHIP1} по горизонталі та ${LOCATION_OF_THE_SHIP2} по вертикалі \nКількість спроб: ${attempt}`
);
