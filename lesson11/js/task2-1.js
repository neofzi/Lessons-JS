//!1 загальний прибуток кожного масиву за тиждень;
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
let table = getTable(7, 1, 0, 10000);
console.log(table);
function getTotalProfit(table) {
  let sum = table.flat(Infinity).reduce((totalSum, el) => (totalSum += el), 0);
  return sum;
}
alert(`Загальна сума: ${getTotalProfit(table)}$`);
