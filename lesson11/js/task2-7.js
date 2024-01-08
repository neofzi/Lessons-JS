//!7 відсортувати кожен тиждень за зростанням
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

function getSortBigNum(table) {
  let sumsPerWeek = [];
  for (let weekIndex = 0; weekIndex < table.length; weekIndex++) {
    let sumOfWeek = table[weekIndex].reduce((sum, el) => sum + el, 0);
    sumsPerWeek.push(sumOfWeek);
  }
  sumsPerWeek.sort((sum1, sum2) => sum1 - sum2);
  return sumsPerWeek;
}
document.write(getSortBigNum(table));
