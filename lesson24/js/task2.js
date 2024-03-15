//!Задача №2
// Дано масив книг (назва, рік видання, автор). Підрахувати кількість книг для кожного автора.
let books = [
  { title: "Title1", year: "2022", author: "Author1" },
  { title: "Title2", year: "2021", author: "Author2" },
  { title: "Title3", year: "2013", author: "Author3" },
  { title: "Title4", year: "2018", author: "Author2" },
  { title: "Title5", year: "2024", author: "Author1" },
];
let map = new Map();
for (const book of books) {
  let authorCount = map.get(book.author) ?? 0;
  map.set(book.author, authorCount + 1);
}
map.forEach((count, author) => {
  document.write(`${author} - ${count} <br>`);
});
