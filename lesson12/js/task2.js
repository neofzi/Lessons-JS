//!Задача №2
// Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування змішуванням.
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
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
function shakerSort(arr) {
  let count = 0,
    leftIndex = 0,
    rightIndex = arr.length - 1;
  while (leftIndex < rightIndex) {
    for (let i = leftIndex; i < rightIndex; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        count++;
      }
    }
    rightIndex--;
    for (let i = rightIndex; i > leftIndex; i--) {
      if (arr[i] < arr[i - 1]) {
        swap(arr, i, i - 1);
        count++;
      }
    }
    leftIndex++;
  }
  return count;
}
document.write(shakerSort(arr));
