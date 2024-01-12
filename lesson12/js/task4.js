//!Задача №4
// Для розглянутих методів сортування спробувати вивести етапи сортування шляхом виведення відповідних таблиць за зразком.
// [3, 5, 1, 4, 2]
// [3, 1, 5, 4, 2]
// [3, 5, 4, 5, 2]
// [3, 5, 4, 2, 5]
function getRandomNum(arrLength, minValue, maxValue) {
  let arr = [];
  for (let i = 0; i < arrLength; i++) {
    let randNum =
      minValue + Math.floor(Math.random() * (maxValue - minValue + 1));
    arr.push(randNum);
  }
  return arr;
}
let arr = getRandomNum(5, 1, 100);
document.write(`Початковий масив: ${arr} <br>`);
function getSortArr(arr) {
  let changed;
  do {
    changed = false;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        let tmp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = tmp;
        document.write(`[${arr}]<br>`);
        changed = true;
      }
    }
  } while (changed);
}
getSortArr(arr);
