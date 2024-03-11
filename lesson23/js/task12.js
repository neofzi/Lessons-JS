//!Задача №12
// Дано адресу сайту. Визначити, чи є він урядовим (містить домен “gov”)
let address = "https://www.example.gov";
let exp = /.+\.gov$/;
if (exp.test(address)) alert("Цей сайт є урядовим");
else alert("Сайт не є урядовим");
