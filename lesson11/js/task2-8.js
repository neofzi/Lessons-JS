//!8 відсортувати тижні (рядки) за спаданням максимального елементи у цьому тижні (рядку), тобто при порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків
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

function getSortBigNum(table) {
  let maxProfits = [];
  for (let weekIndex = 0; weekIndex < table.length; weekIndex++) {
    let maxProfit = Math.max(...table[weekIndex]);
    maxProfits.push(maxProfit);
  }
  maxProfits.sort((max1, max2) => max2 - max1);
  return maxProfits;
}
document.write(getSortBigNum(table));
