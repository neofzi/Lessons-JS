//!Задача №1
// Дано масив, який містить оцінки з К предметів. Знайти середній бал і з’ясувати до якої категорії він відноситься (відмінник, двійочник (має хоча би одну двійку), хорошист (оцінки добре і відмінно), трійочник(є хоча би одна трійка)).
function getEvaluations(userNum) {
  let result = 0;
  let evaluations = [];
  for (let i = 1; i <= userNum; i++) {
    let userEvalutions = parseInt(
      prompt(`Введіть оцінку від 1 до 5 по уроку №${i}`)
    );
    evaluations.push(userEvalutions);
    result += userEvalutions;
  }
  return result / userNum;
}
let userLessons = parseInt(prompt("Введіть кількість уроків"));
let userRating;
switch (userLessons) {
  case 1:
  case 2:
    userRating = "Двійочник";
    break;
  case 3:
    userRating = "Трійочник";
    break;
  case 4:
  case 5:
    userRating = "Відмінник";
    break;
}
document.write(
  `Ваша середня оцінка: ${getEvaluations(userLessons)} <br>Ви ${userRating}`
);
