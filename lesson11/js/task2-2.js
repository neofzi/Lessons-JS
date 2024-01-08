//!2 загальний прибуток усіх магазинів по дням (загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.);
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
let store = parseInt(prompt("Введіть кількість магазинів"));
let day = parseInt(prompt("Введіть кількість днів"));
let table = getTable(store, day, 0, 1000);
console.log(table);

function getProfitAllStore(table) {
  let totalSum = table
    .flat(Infinity)
    .reduce((totalSum, el) => (totalSum += el), 0);
  return totalSum;
}
document.write(getProfitAllStore(table));
