//!9 упорядкувати тижні (рядки) за спаданням суми елементів у рядку (тобто при порівнянні двох рядків треба знайти суму кожного з рядків і порівнювати ці суми, на основі цих сум буде зрозуміло, який з елементів повинен іти раніше)
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
let table = getTable(3, 3, 0, 1000);
console.log(table);

function getSortBigSum(table) {
  let rowSums = [];
  for (let weekIndex = 0; weekIndex < table.length; weekIndex++) {
    let sumForWeek = table[weekIndex].reduce((sum, el) => sum + el, 0);
    rowSums.push(sumForWeek);
  }
  rowSums.sort((max1, max2) => max2 - max1);
  return rowSums;
}
document.write(getSortBigSum(table));
