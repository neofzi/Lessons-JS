//!Задача №6
// Користувач іде у відпустку на 56 днів. Визначити дату на момент його повернення.
function determinationOfReturnDate(quantityDays) {
  let date = new Date();
  date.setDate(date.getDate() + quantityDays);
  return date;
}

let returnDate = determinationOfReturnDate(56);
let options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
let formattedDate = returnDate.toLocaleString("uk-UA", options);

document.querySelector(
  ".box"
).innerHTML = ` Ви повернетесь із відпустки ${formattedDate}`;
