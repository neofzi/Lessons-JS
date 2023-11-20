//!Задача №13
// Морський бій. Комп’ютер випадково розташовує одиночний корабель на полі розміром N*M. Маючи К снарядів користувач намагається потопити корабель.
const START_GAME = confirm("Пограємо в гру?");
if (START_GAME === true) {
  const FIELD_WIDTH = parseInt(prompt("Введіть ширину поля у клітинках"));
  const FIELD_HEIGHT = parseInt(prompt("Введіть висоту поля у клітинках"));
  const THE_WHOLE_FIELD_AREA = FIELD_WIDTH * FIELD_HEIGHT;
  let numberOfShells = parseInt(
    prompt("Введіть кількість снарядів яку хочете використати")
  );
  let shipLocation = 1 + Math.floor(Math.random() * THE_WHOLE_FIELD_AREA);
  for (let i = numberOfShells - 1; i >= 0; i--) {
    let shot = parseInt(
      prompt(
        `Введіть клітинку куди хочете зробити постріл (число повинно бути до ${THE_WHOLE_FIELD_AREA})`
      )
    );
    if (shot === shipLocation) {
      alert("Ви виграли!");
      break;
    } else if (shot > THE_WHOLE_FIELD_AREA) {
      alert(`Ви вистрілили за межі поля.. у вас залишилось ${i} снарядів`);
    } else {
      alert(`Ви не влучили, у вас залишилось ${i} снарядів`);
    }
  }
  document.write("<h2>Кінець гри</h2>");
} else {
  alert("Шкода :(");
}
