// Scoping
// let str = 'dfs';

// var a = 1;

// {
//     var a = 2;
// }

// function b() {
//     var a = 3;
//     console.log(a);
// }

// b();

// const c = () => {
//     var a = 4;
//     console.log(a);
// };

// c();

// if (true) {
//     var a = 5;
//     let str = 'fff';
// }

// console.log(a, str);


// Closure
// let a = 1;

// if(true){
//     let a = 2;
//     console.log(a);

//     if(true){
//         let b = 3;
//         console.log(a, b);

//         if(true){
//             let c = 4;
//         }

//         if(true){
//             console.log(c);
//         }
//     }
// }


// function balance() {
//     let b = 100;

//     return {
//         topUp: (amount) => {
//             b += amount;
//             console.log(b);
//         },

//         withdraw: (amount) => {
//             b -= amount;
//             console.log(b);
//         }
//     };
// }

// let jasurbekBalance = balance();
// let javohirBalance = balance();

// jasurbekBalance.topUp(10000);
// javohirBalance.topUp(4000);

// jasurbekBalance.topUp(100000);
// javohirBalance.withdraw(3200);

// jasurbekBalance.topUp(1000000);
// jasurbekBalance.withdraw(1108000);

// console.log("Jasurbek aka Mercades-Benz G63 Oldi 🔥");


// Hoisting
// a();

// b();

// c();

// d();

// function a() {
//     console.log(123);
// };

// let b = function () {
//     console.log(234);
// };

// const c = () => {
//     console.log(345);
// };

// var d = () => {
//     console.log(456);
// }





// amaliy darsda yozilgan

let sum = 1;

function sum(a) {    
    return (a)=> {
        console.log(a + sum);
    }
}