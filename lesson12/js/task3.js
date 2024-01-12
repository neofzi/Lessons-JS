//!Задача №3
// Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування включеннями.
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
function insertSort(arr) {
  let count = 0;
  for (let k = 1; k < arr.length; k++) {
    const CURRENT_ELEMENT = arr[k];
    let i = k - 1;
    while (i >= 0 && arr[i] > CURRENT_ELEMENT) {
      arr[i + 1] = arr[i--];
      i -= 1;
      count++;
    }
    arr[i + 1] = CURRENT_ELEMENT;
  }
  return count;
}
document.write(insertSort(arr));
