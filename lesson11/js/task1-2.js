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

//!5 Суму парних рядків і не парних
function getSumRow(table) {
  let sumEvenNum = 0;
  let sumOddNum = 0;
  table.forEach((row, index) => {
    const SUM_ROW = row.reduce((acc, el) => acc + el, 0);
    if (index % 2 === 0) sumEvenNum += SUM_ROW;
    else sumOddNum += SUM_ROW;
  });
  return [sumEvenNum, sumOddNum];
}
let result = getSumRow(table);
document.write(`Сума парних рядків = ${result[0]} <br>`);
document.write(`Сума не парних рядків = ${result[1]} <br>`);
