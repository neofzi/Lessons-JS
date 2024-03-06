//!Задача №10
// Сформувати масив з 1000 елементів від 1 до 800. Порівняти час сортування бульбашкою і  вставкою.
function getRandArr(arrLength, min, max) {
  let arr = [];
  for (let i = 0; i < arrLength; i++) {
    let getRandNum = min + Math.floor(Math.random() * (max - min + 1));
    arr.push(getRandNum);
  }
  return arr;
}
let arr = getRandArr(1000, 1, 800);
console.log(arr);
let bubleStart = Date.now();
function bubleSort(arr) {
  let changed;
  do {
    changed = false;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        let tmp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = tmp;
        changed = true;
      }
    }
  } while (changed);
}
bubleSort(arr);
let bubleEnd = Date.now();
let bubleSortTime = bubleEnd - bubleStart;
let bubleWrap = document.querySelector(".buble-start");
bubleWrap.innerText = `Сортування бульбашкою - ${bubleSortTime}ms`;
console.log(arr);

//========================================================================================================================================================

let insertStart = Date.now();
function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const element = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > element) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = element;
  }
}
insertSort(arr);
let insertEnd = Date.now();
let insertSortTime = insertEnd - insertStart;
let insertWrap = document.querySelector(".insert-start");
insertWrap.innerText = `Сортування Вставкою - ${insertSortTime}ms`;
console.log(arr);
