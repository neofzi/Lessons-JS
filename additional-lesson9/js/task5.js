//!Задача №5
// Дано масив рядків. Створіть новий масив, в якому будуть тільки ті рядки, які містять слово "JavaScript".
let strings = [
  "JavaScript is a powerful programming language.",
  "I love coding in Python.",
  "Learning JavaScript is fun.",
  "Java is another programming language.",
];
let withJS = [];
strings.forEach((element) => {
  if (element.includes("JavaScript")) withJS.push(element);
});
document.write(`${withJS}`);
