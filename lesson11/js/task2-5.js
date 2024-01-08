//!5 максимальний прибуток за середу
function getRandomNum(minValue, maxValue) {
  return minValue + Math.floor(Math.random() * (maxValue - minValue + 1));
}
function getRandomArray(arrayLenght, minValue, maxValue) {
  let randomArr = [];
  for (let i = 0; i < arrayLenght; i++) {
    let randNum = getRandomNum(minValue, maxValue);
    randomArr.push(randNum);
  }
  return randomArr;
}
function getTable(rowNumbers, columnNumbers, minValue, maxValue) {
  let table = [];
  for (let i = 0; i < rowNumbers; i++) {
    let randomRow = getRandomArray(columnNumbers, minValue, maxValue);
    table.push(randomRow);
  }
  return table;
}
let table = getTable(3, 7, 0, 1000);
console.log(table);

function getMaxProfitWednesday(table) {
  let maxProfit = -Infinity;
  for (let weekIndex = 0; weekIndex < table.length; weekIndex++) {
    if (maxProfit < table[weekIndex][2]) maxProfit = table[weekIndex][2];
  }
  return maxProfit;
}
document.write(getMaxProfitWednesday(table));
