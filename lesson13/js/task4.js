//!Задача №4
// З використанням замикань розробити ітератор, тобто функцію, що буде поступово за окремими викликами видавати по одну букву наперед заданого слова. З використанням нього розробити гру «Прекладач». Виводимо для користувача опис цього слова і по одну букву користувач вводить переклад цього слова. Підрахувати кількість вгаданих букв.
alert("Маю клавіші, допомагаю людям і зручний для перегляду фільмів. Що я?");
function getWord(word) {
  let wordArray = Array.from(word);
  return wordArray.join("");
}
let word = getWord("Computer");
function getWordIterator(word) {
  let count = 0;
  function getLetter() {
    if (count === word.length) count = 0;
    let letter = word[count];
    ++count;
    return letter;
  }
  return getLetter;
}
function getWordGuessing(word, iterator) {
  let guessedArray = Array.from(word).fill("_ ");
  for (let i = 1; i <= word.length; i++) {
    let letter = iterator();
    let userTranslation = prompt(`Введіть ${i} букву`);
    if (userTranslation === letter) {
      guessedArray[i - 1] = letter;
      alert(`Ви вгадали буква:\n${guessedArray.join("")}`);
    } else {
      guessedArray[i - 1] = letter;
      alert(`Ви не вгадали:\n${guessedArray.join("")}`);
    }
  }
}

let iterator = getWordIterator(word);
getWordGuessing(word, iterator);
