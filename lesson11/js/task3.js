//!Задача №3
//!Морський бій. Випадковим чином на двовимірному полі розміром 6*6 розташовується 5 кораблів. Користувач стріляє вказуючи координати. Гра продовжується поки не потоплено усі кораблі або у користувача не закінчаться снаряди.
function getTable(rowNumbers, columnNumbers) {
  let table = [];
  for (let i = 0; i < rowNumbers; i++) {
    let row = Array(columnNumbers).fill(0);
    table.push(row);
  }
  return table;
}
let rowSum = parseInt(prompt("Введіть ширину поля (в числах)"));
let columnSum = parseInt(prompt("Введіть висоту поля (в числах)"));
let table = getTable(rowSum, columnSum);

function placeShips(table, numberOfShips) {
  let shipsPlaced = 0;
  while (shipsPlaced < numberOfShips) {
    let randomRow = Math.floor(Math.random() * table.length);
    let randomColumn = Math.floor(Math.random() * table[0].length);
    if (table[randomRow][randomColumn] === 0) {
      table[randomRow][randomColumn] = "⛵️";
      shipsPlaced++;
    }
  }
  return table;
}
let numberOfShips = parseInt(prompt("Введіть кількість кораблів"));
console.log(placeShips(table, numberOfShips));

function getTableString(table) {
  return table
    .map((row) => row.map((cell) => (cell === "⛵️" ? 0 : cell)).join(", "))
    .join("\n");
}

function getUserShot(table) {
  let userColumn, userRow;
  let numberOfShots = parseInt(prompt("Введіть кількість снарядів"));
  do {
    userRow = parseInt(
      prompt(
        "Введіть номер рядка для вистрілу (від 0 до " + (table.length - 1) + ")"
      )
    );
    userColumn = parseInt(
      prompt(
        "Введіть номер стовпця для вистрілу (від 0 до " +
          (table[0].length - 1) +
          ")"
      )
    );
    if (table[userRow][userColumn] === "⛵️") {
      table[userRow][userColumn] = "🔥";
      alert(`Ви влучили в корабель!\n${getTableString(table)}`);
      numberOfShots--;
    } else {
      table[userRow][userColumn] = "❌";
      alert(`Ви не влучили :(\n${getTableString(table)}`);
      numberOfShots--;
    }
  } while (numberOfShots > 0 && table.flat().includes("⛵️"));
  return table;
}
document.write(`Кінець гри!<br>${getUserShot(table)}`);
