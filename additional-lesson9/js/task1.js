//!Задача №1
// Дано масив слів. Створіть новий масив, в якому будуть тільки ті слова, які мають більше 5 літер.
let words = ["apple", "banana", "grape", "kiwi", "orange"];
// Реалізація завдання тут
let moreThan5 = [];
words.forEach((element) => {
  if (element.length > 5) moreThan5.push(element);
});
document.write(`${moreThan5}`);
