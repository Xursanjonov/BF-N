// JS Function
// labeled

// lyuboy: for (let i = 0; i <= 9; i++){
//     boshqa: for (let j = i; j <= 9; j++){
//         if(j === 3){
//             continue lyuboy;
//         } else if(j === 8){
//             break;
//         }
//         // console.log(i, j);
//     }
// }

// 1) function declaretion => aniqlamoq
// function funksiya() {
//     let a = 5;
//     // console.log(18-13);
// }

// function expression
// let adder = function(){
//     let num1 = 80;
//     let num2 = 8;
//     console.log(num1+num2);
// };
// adder()
// console.log();

// Arrow 
// let greeting = () => {
//     let str1 = "Hammaga ";
//     let str2 = "Salom";
//     console.log(str1 + str2);
// }
// greeting()

function isPositive(num){
    if(num > 0){
        return true;
    } else {
        return false;
    }
}

function isNegative(num){
    if(num < 0){
        return true;
    } else {
        return false;
    }
}

// console.log(isPositive(5));
// console.log(isNegative(5));

let i = 0;
function logger() {
    i++;
    console.log("Ishga tushdi", i);
}

logger();
let tID =  setTimeout(logger, 1000);
let iID = setInterval(logger, 50);

setInterval(() => {
    clearInterval(iID);
}, 100);

