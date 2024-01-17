//!Задача №2
// Реалізувати бінарний пошук (розглядали на попередніх уроках) з використанням рекурсивного алгоритму.
let num = [7, 57, 777, 37, 77];
num.sort((a, b) => a - b);
function includesBinarySearch(
  num,
  searchElement,
  start = 0,
  end = num.length - 1
) {
  while (start <= end) {
    const MIDDLE = Math.floor((start + end) / 2);
    if (num[MIDDLE] === searchElement) return MIDDLE;
    if (num[MIDDLE] < searchElement)
      return includesBinarySearch(num, searchElement, MIDDLE + 1, end);
    if (num[MIDDLE] > searchElement)
      return includesBinarySearch(num, searchElement, start, MIDDLE - 1);
  }
  return -1;
}
let result = includesBinarySearch(num, 777);
document.write(result);
