//!Задача №5
// Дано послідовність оцінок учня. Підрахувати кількість:
// 1)	двійок
// 2)	кількість хороших оцінок (добре, відмінно);
// 3)	кількість оцінок, які нижче середнього.
function getStudentPoint() {
  let points = [];
  for (let i = 1; i <= userOfPoints; i++) {
    let inputPoint = parseInt(prompt("Введіть оцінку від 1 до 12"));
    if (inputPoint >= 1 && inputPoint <= 12) points.push(inputPoint);
    else {
      alert("Ви ввели некоректні дані");
      i--;
    }
  }
  return points;
}
function getStudentPointBad(points) {
  let counter = 0;
  for (let i = 0; i < points.length; i++) {
    if (points[i] <= 2) counter++;
  }
  return counter;
}
function getStudentPointGood(points) {
  let counter = 0;
  for (let i = 0; i < points.length; i++) {
    if (points[i] > 6 && points[i] <= 12) counter++;
  }
  return counter;
}
function getStudentPointBelowAverage(points) {
  let counter = 0;
  for (let i = 0; i < points.length; i++) {
    if (points[i] <= 6 && points[i] >= 1) counter++;
  }
  return counter;
}
let userOfPoints = parseInt(prompt("Введіть кількість оцінок"));
let studentPoint = getStudentPoint(userOfPoints);
let studentPointBad = getStudentPointBad(studentPoint);
let studentPointGood = getStudentPointGood(studentPoint);
let studentPointBellowAverage = getStudentPointBelowAverage(studentPoint);

document.write(`Кількість поганих оцінок: ${studentPointBad}`);
document.write(`Кількість хороших оцінок: ${studentPointGood}`);
document.write(
  `Кількість нижче середнього оцінок: ${studentPointBellowAverage}`
);
