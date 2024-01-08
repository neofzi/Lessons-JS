//!3 загальний прибуток за робочі дні
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
let table = getTable(2, 7, 0, 1000);
console.log(table);

function getProfitAllStore(table) {
  let sum = 0;
  for (let weekIndex = 0; weekIndex < table.length; weekIndex++) {
    for (let dayIndex = 0; dayIndex < 5; dayIndex++) {
      sum += table[weekIndex][dayIndex];
    }
  }
  return sum;
}
document.write(getProfitAllStore(table));
