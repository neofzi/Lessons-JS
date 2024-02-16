//!Задача №4
// Дано 3 таблиці розмірності 3*3 з випадковими числами. Якщо відбувається клік на якійсь із клітинок, то до відповідної таблиці додається червона рамка (спробуйте додати можливість відображення кількості кліків біля назви таблиці з використанням відповідно доданого для цього атрибута).
class Table {
  constructor(count) {
    this.count = count;
    this.tables = [];
  }
  generateTable() {
    for (let t = 0; t < this.count; t++) {
      const table = document.createElement("table");
      table.clicks = 0;
      for (let d = 0; d < this.count; d++) {
        const td = document.createElement("td");
        td.onclick = this.click.bind(this, table);
        for (let r = 0; r < this.count; r++) {
          let randNum = Math.floor(Math.random() * (100 - 1 + 1));
          const tr = document.createElement("tr");
          tr.innerText = randNum;
          td.append(tr);
        }
        table.append(td);
      }
      document.body.append(table);
      let div = document.createElement("div");
      div.innerText = `${table.clicks}`;
      table.after(div);
      this.tables.push(table);
    }
  }
  click(table) {
    table.clicks++;
    table.classList.toggle("red-border");
    const clicksDisplay = table.nextElementSibling;
    clicksDisplay.innerText = `${table.clicks}`;
  }
}

window.onload = function () {
  let table = new Table(3);
  table.generateTable();
};
