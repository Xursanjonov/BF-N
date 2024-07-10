/* Kirish: arr = [0,10,20,30], fn = funktsiya kattaroq10(n) { qaytish n > 10; }
 Chiqish: [20,30]
 Izoh:
const newArray = filter(arr, fn); // [20, 30]
Funktsiya 10 dan katta bo'lmagan qiymatlarni filtrlaydi */

// let arr = [0, 10, 20, 30];
// let fn = 10

// var filter = function (arr, fn) {
//     return arr.map(fn, (n)=> n > 10)
// };

// filter(arr)

var strArr = ["[1,2,3,4]","[1,2,3,4"];
var arr1 = strArr[0].match(/\d+/g).map(Number); 

console.log(`var 1 ${strArr}, var 2 ${arr1}]`);