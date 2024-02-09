//!Задача №5
// Користувач задає кількість рядків і стовпців. Відобразити таблицю, у клітинках якої знаходяться числа 1, 2, 3, …
function createTable() {
  const tableEl = document.createElement("table");
  const userRow = parseInt(document.getElementById("user-row").value);
  const userColumn = parseInt(document.getElementById("user-column").value);

  const prevTable = document.querySelector("table");
  if (prevTable) prevTable.remove();

  let count = 1;
  for (let r = 0; r < userRow; r++) {
    const trEl = document.createElement("tr");
    for (let c = 0; c < userColumn; c++) {
      const tdEl = document.createElement("td");
      tdEl.innerText = count++;
      trEl.append(tdEl);
    }
    tableEl.append(trEl);
  }

  document.querySelector(".lesson-5").append(tableEl);
}

window.onload = function () {
  document.getElementById("user-row").oninput = createTable;
  document.getElementById("user-column").oninput = createTable;
};
