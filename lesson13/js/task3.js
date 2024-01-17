//!Задача №3
// З використанням замикань розробити ітератор, тобто функцію, що буде поступово за окремими викликами видавати по одне значення від заданого мінімального до заданого максимального. Якщо значення досягне максимального, то наступним буде мінімальне значення. З використанням цієї функції реалізувати перебір номерів місяців.
function getIterator(monthNum, min = 1, max = 12) {
  monthNum = max;
  function getNumMonth() {
    if (monthNum === max) monthNum = min;
    else monthNum++;
    return monthNum;
  }
  return getNumMonth;
}
let month = getIterator();
for (let i = 0; i < 30; i++) {
  document.write(`${month()} `);
}
