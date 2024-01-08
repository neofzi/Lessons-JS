//Знайти суми елементів у вказаній області
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
let table = getTable(4, 2, 1, 10);
console.log(table);

//!1 варіант
function getSumRow(table, startRow, startColumn, endRow, endColumn) {
  let sum = 0;
  for (let rowNumber = startRow; rowNumber < endRow; rowNumber++) {
    for (
      let columnNumber = startColumn;
      columnNumber < endColumn;
      columnNumber++
    ) {
      sum += table[rowNumber][columnNumber];
    }
  }
  return sum;
}
alert(getSumRow(table, 0, 0, 1, 2));
alert(getSumRow(table, 1, 0, 2, 2));
alert(getSumRow(table, 2, 0, 3, 2));
alert(getSumRow(table, 3, 0, 4, 2));
