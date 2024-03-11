//!Задача №8
// Дано рядок тексту. Вивести усі складові, які розділені розділовими знаками.
let str = "Слава Україні! - Героям Слава!";
let parts = str.split(/[.,?!-]/);
parts = parts.map((part) => part.trim());
console.log(parts);
