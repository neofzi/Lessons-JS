//!Задача №1
// Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування бульбашкою
function getRandomNum(arrLength, minValue, maxValue) {
  let arr = [];
  for (let i = 0; i < arrLength; i++) {
    let randNum =
      minValue + Math.floor(Math.random() * (maxValue - minValue + 1));
    arr.push(randNum);
  }
  return arr;
}
let arr = getRandomNum(30, 1, 100);
function getSortArr(arr) {
  let count = 0;
  let changed;
  do {
    changed = false;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        let tmp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = tmp;
        changed = true;
        count++;
      }
    }
  } while (changed);
  return count;
}
document.write(getSortArr(arr));
