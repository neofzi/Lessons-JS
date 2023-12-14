//!Задача №8
// Створити функцію, яка виводить банер (у функцію передаються: зображення, заголовок та посилання, куди переходимо при кліку на зображення (тег img повине знаходитись у середині тега a: <a> <img src=”шлях”> </a>
function getBanner() {
  document.write(
    "<h1 style='font-size: 24px; margin-bottom: 30px;'>Слава Україні!</h1>"
  );
  document.write(
    "<a href='#'><img style='height: 250px;' src='https://st4.depositphotos.com/21486874/28809/i/450/depositphotos_288097462-stock-photo-ukraine-flag-being-waved-by.jpg'></a>"
  );
}
getBanner();
