//!Задача №4
// Наперед задано у скрипті масив зі списком бажань. Після завантаження сторінки випадковим чином вибираються 3 і відображаються у окремих div (їх треба створити і додати на сторінку)
let dream = [
  "Закінчення війни",
  "Щоб здох путін і всі його посіпаки",
  "Гроші",
  "Багато грошей",
  "porsche 911 Turbo S",
  "Багато, дуже багато замовлень на фрілансі",
];
let randomDreams = [];
while (randomDreams.length < 3) {
  let randomIndex = Math.floor(Math.random() * dream.length);
  if (!randomDreams.includes(dream[randomIndex]))
    randomDreams.push(dream[randomIndex]);
}
randomDreams.forEach((dream) => {
  let newDiv = document.createElement("div");
  newDiv.textContent = dream;
  document.body.prepend(newDiv);
});
