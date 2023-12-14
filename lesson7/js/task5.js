//!Задача №5
// Створити окремі функції, які переводять:
// 1) Сантиметри у дюйми;
// 2) Кілограми у фунти;
// 3) Кілометри у милі.
function getCentimeterConversion(centimeters) {
  const INCHES = 0.393701;
  let sumCentimeter = centimeters * INCHES;
  return sumCentimeter.toFixed(2);
}
function getKilogramsToPounds(kilograms) {
  const POUNDS = 2.20462;
  let sumPounds = kilograms * POUNDS;
  return sumPounds.toFixed(2);
}
function getKilometersToMiles(kilograms) {
  const MILES = 0.621371;
  let sumMiles = kilograms * MILES;
  return sumMiles.toFixed(2);
}

let userNumbers1 = parseFloat(prompt("Введіть кількість сантиметрів"));
let userNumbers2 = parseInt(
  prompt("Введіть кількість кілометрів щоб перевести в фунти")
);
let userNumbers3 = parseInt(
  prompt("Введіть кількість кілограм щоб перевести в милі")
);
document.write(
  `Сантиметри у дюйми: ${getCentimeterConversion(
    userNumbers1
  )} <br> Кілограми в фунтах: ${getKilogramsToPounds(
    userNumbers2
  )} <br> Кілограми в милях: ${getKilometersToMiles(userNumbers3)}`
);
