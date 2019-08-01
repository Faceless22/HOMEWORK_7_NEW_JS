"use strict";

// 1. Нужно вывести в консоль сколько минут осталось до конца текущего дня.

let now = new Date();
let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() +1);
let diff = tomorrow - now;
let date = Math.floor(diff / 1000 / 60);
console.log(date);


// 2. Нужно вывести в консоль сколько секунд прошло с начала текущего дня.

let now2 = new Date();
let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
let diff2 = now2 - today;
let date2 = Math.floor(diff2 / 1000);
console.log(date2);


// 3. Выведите в консоль название для недели (например: Понедельник), которая была 25 января 2013

let date3 = new Date(2013, 0, 25);
console.log(date3);














