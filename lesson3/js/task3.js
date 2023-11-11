//!Задача №3
// Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби.
let userNumber = parseInt(
  prompt(
    "Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби."
  )
);
let minNumber = 1,
  maxNumber = 5;
let randomNumber = Math.floor(
  Math.random() * (maxNumber - minNumber + 1) + minNumber
);

if (userNumber !== randomNumber) {
  userNumber = parseInt(prompt("Ви не вгадали, спробуйте ще раз"));
  if (userNumber !== randomNumber) {
    alert(`Вибачте, ви програли :( випадковим числом було ${randomNumber}`);
  }
} else {
  alert("Вітаю! ви виграли АВТОМОБІЛЬ!");
}
