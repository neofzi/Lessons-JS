//!6 сформувати загальний список (одновимірний масив) зі значенням, які що більші за 200
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

function getMore200(table) {
  let more200 = table.flat(Infinity).filter((el) => el > 200);
  return more200;
}
document.write(getMore200(table));
