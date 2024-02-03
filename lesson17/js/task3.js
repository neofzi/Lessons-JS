//!Задача №3
// Створити клас Нагадувач. Кожні вказані кількості секунд (використати setInterval) програма нагадує про якусь подію (це просто текст) і також виводиться порядковий номер скільки раз вже нагадування було. Зробити так, щоб неможна було зробити одночасно декілька об’єктів-нагадувачів. Методи зупинки таймера, метод зміни повідомлення без зупинки таймера.
class Reminder {
  static instance;
  static interval = 1000;
  static message = "Live your dreams!";
  static number = 0;
  static intervalId;
  constructor() {
    if (Reminder.instance) return Reminder.instance;
    Reminder.instance = this;
  }
  run() {
    Reminder.intervalId = setInterval(() => {
      document.write(`${(Reminder.number += 1)} - ${Reminder.message}<br>`);
    }, Reminder.interval);
  }
  stop() {
    clearInterval(Reminder.intervalId);
  }
  changeMessage(newMessage) {
    Reminder.message = newMessage;
  }
}
let spam1 = new Reminder();
spam1.run();

setTimeout(() => {
  spam1.changeMessage("Never stop!");
}, 5000);

setTimeout(() => {
  spam1.stop();
}, 10000);
