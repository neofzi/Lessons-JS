//!Задача №2
// Дано масив, який зберігає кількість відвідувачів магазину протягом тижня. Вивести на екран:
// номери днів, протягом яких кількість відвідувачів була меншою за 20;
// номери днів, коли кількість відвідувачів була мінімальною;
// номери днів, коли кількість відвідувачів була мінімальною;
// загальну кількість клієнтів у робочі дні та окремо загальну кількість днів на вихідних
function getVisitors() {
  let visitors = [];
  for (let i = 1; i <= 7; i++) {
    let userVisitors = parseInt(
      prompt(`Введіть кількість відвідувачів за ${i} день`)
    );
    visitors.push(userVisitors);
  }
  return visitors;
}
function getDayLessThan20(visitors) {
  let dayNums = [];
  for (let i = 0; i < visitors.length; i++) {
    if (visitors[i] < 20) {
      dayNums.push(i + 1);
    }
  }
  return dayNums;
}
function getMaxVisitors(visitors) {
  let maxVisitors = visitors[0];
  let maxDay = [];
  for (let i = 0; i < visitors.length; i++) {
    if (visitors[i] > maxVisitors) {
      maxVisitors = visitors[i];
      maxDay = [i + 1];
    } else if (visitors[i] === maxVisitors) maxDay.push(i + 1);
  }
  return maxDay;
}
function getMinVisitors(visitors) {
  let minVisitors = visitors[0];
  let minDay = [];
  for (let i = 0; i < visitors.length; i++) {
    if (visitors[i] < minVisitors) {
      minVisitors = visitors[i];
      minDay = [i + 1];
    } else if (visitors[i] === minVisitors) minDay.push(i + 1);
  }
  return minDay;
}
function getWorkingDays(visitors) {
  let sum = 0;
  for (let i = 0; i < 5; i++) {
    sum += visitors[i];
  }
  return sum;
}
function getWeekend(visitors) {
  let sum = 0;
  for (let i = 5; i < 7; i++) {
    sum += visitors[i];
  }
  return sum;
}
let allVisitors = getVisitors();
let dayLessThan20 = getDayLessThan20(allVisitors);
let maxVisitors = getMaxVisitors(allVisitors);
let minVisitors = getMinVisitors(allVisitors);
let workingDaysResult = getWorkingDays(allVisitors);
let weekendResult = getWeekend(allVisitors);
document.write(
  `Кількість відвідувачів яких була менша за 20: ${dayLessThan20}<br> Кількість днів коли кількість відвідувачів була мінімальною: ${maxVisitors} <br> Кількість днів коли кількість відвідувачів була максимальною: ${minVisitors} <br> Сума клієнтів в робочі дні: ${workingDaysResult}<br>Сума клієнтів в вихідні дні: ${weekendResult}`
);
