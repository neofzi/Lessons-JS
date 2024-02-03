//!Задача №4
// Особиста бібліотека. Картотека домашньої бібліотеки: дані книги (автори (піб, рік народження, короткий опис), назва книги, жанр, видавництво (назва, реєстраційний номер, рік засування)). Реалізувати розділи бібліотеки організувати додавання/вилучення книг та  вибір книг за назвою, за ПІБ автора, за видавництвом.
class Author {
  constructor(name, dateOfBirth, description) {
    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.description = description;
  }
}
class Publisher {
  constructor(title, registrationNumber, yearOfIntroduction) {
    this.title = title;
    this.registrationNumber = registrationNumber;
    this.yearOfIntroduction = yearOfIntroduction;
  }
}
class Book {
  constructor(titleBook, ganre, Publisher, Author) {
    this.titleBook = titleBook;
    this.ganre = ganre;
    this.Publisher = Publisher;
    this.Author = Author;
  }
}
class Library {
  constructor() {
    this.books = [];
  }
  addBook(newBook) {
    this.books.push(newBook);
  }
  removeBook(book) {
    let indexBook = this.books.indexOf(book);
    if (indexBook !== -1) return this.books.splice(indexBook, 1);
  }
  findBooksByTitle(title) {
    return this.books.filter((book) => book.titleBook === title);
  }
  findBooksByAuthor(authorName) {
    return this.books.filter((book) => book.Author.name === authorName);
  }
  findBooksByPublisher(publisherName) {
    return this.books.filter((book) => book.Publisher.title === publisherName);
  }
}

let authors = [
  new Author(
    "Тарас Григорович Шевченко",
    1814,
    'Тарас Шевченко - великий український поет, художник і герой боротьби за визволення кріпаків. Народився 1814, відомий своєю збіркою "Кобзар". Його твори віддзеркалюють любов до рідної землі та боротьбу за соціальну справедливість.'
  ),
  new Author(
    "Іван Франко",
    1856,
    "Іван Франко - великий український письменник, поет, громадський і політичний діяч. Народився 1856, автор численних творів українською та польською мовами."
  ),
];
let publishers = [
  new Publisher("А-БА-БА-ГА-ЛА-МА-ГА", "UA12345", 1995),
  new Publisher("Основи", "UA67890", 1980),
];
let books = [
  new Book("Кобзар", "Поезія", publishers[0], authors[0]),
  new Book("Захар Беркут", "Історичний роман", publishers[1], authors[1]),
];

let library = new Library();
for (let i = 0; i < books.length; i++) {
  library.addBook(books[i]);
}
console.log(library.books);

library.addBook(new Book("Тронка", "Пригоди", publishers[0], authors[0]));

console.log("Назва книги:", library.findBooksByTitle("Захар Беркут"));
console.log(
  "Автор книги:",
  library.findBooksByAuthor("Тарас Григорович Шевченко")
);
console.log(
  "Видавництво:",
  library.findBooksByPublisher("А-БА-БА-ГА-ЛА-МА-ГА")
);
library.removeBook(library.findBooksByTitle("Кобзар")[0]);

console.log(library.books);
