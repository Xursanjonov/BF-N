// function a() {}; // regular
// let b = function () {}; // function expression
// let c = () => {}; //arrow function

// function recuraive(n) {
//     if ( n === 0 || n === 1 ){
//         return 1;
//     } else {
//         return n * recuraive(n - 1);
//     }
// }

// let i = 0;
// function r(){
//     console.log(++i);
//     r();
// }


// HOF => High Order Function 
// 1
// function a(b) {
//     b();
// }
// a(function () {});

// setTimeout(() => {

// }, 500);

// // 2
// function a() {
//     return function () {};
// }

// function adder(str1) {
//     return function (str2) {
//         console.log(str1 + str2);
//     };
// }

// let salomlashish = adder("Salom ");

// salomlashish("Eshmat");
// salomlashish("Toshmat");

// IIFE => Immeadiately Invoked Function Expression
// (function game() {
//     console.log("O`yin boshlandi");
//     // ...
//     console.log("O`yin tugadi.");
//     let replay = confirm("Yana o`ynaysixmi ?");
//     if(replay){
//         game()
//     }
// })();

