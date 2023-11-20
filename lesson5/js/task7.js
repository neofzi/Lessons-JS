//!Задача №7
// Вивести на екран N абзаців (N вводиться користувачем)
let quantityParagraphs = parseInt(prompt("Введіть кількість параграфів"));
for (let q = 1; q <= quantityParagraphs; q++) {
  document.write(`<h2>Заголовок ${q}</h2>`);
  for (let p = 1; p <= q; p++) {
    document.write(`<p>Розділ ${q}, параграф ${p}</p>`);
  }
}
