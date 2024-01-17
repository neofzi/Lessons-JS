//!Задача №1
// Рекурсивна функція для підрахунку кількості символів 'a' у рядку
let row = "abracadabra";
document.write(`${row} <br>`);

function getLineBreak(str, index = 0, count = 0) {
  if (index < str.length) {
    if (str[index] === "a") count++;
    return getLineBreak(str, index + 1, count);
  } else return count;
}
document.write(getLineBreak(row));
