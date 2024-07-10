// console.log(Math.E);
// console.log(Math.PI);
// console.log(Math.LN10);
// console.log(Math.SQRT1_2);
// console.log(Math.SQRT2);
// console.log(Math.abs(10));
// console.log(Math.max(30,64,2.5,-6.8,7,8));
// console.log(Math.min(30,64,2.5,-6.8,7,8));
// console.log(Math.pow(2, 4)); // darsja **
// console.log(Math.sqrt(121));

// Min = 10, MAx = 100
// Ultimate formula: Math.floor(Math.random() * (MAX - MIN + 1) + MIN)
// console.log(Math.floor(Math.random() * (100 - 10 + 1)) + 10)
// console.log(Math.random() * 10+ 1); // min = 0, max < 1 ~ 0.99999999

// parseInt

// Math.floor(-3.14);
// Math.ceil(Math.floor(-3.14));
// Math.round(3.14);


// if , else function
// let a = Math.floor(Math.random() * 10 +1);

// 1-masala

// if (a === 0){
//     console.log("Juft ham, Toq ham emas: ", a);
// } else if (a % 2 === 0){
//     console.log("Juft son chiqdi: ", a);
// } else {
//     console.log("Toq son chiqdi: ", a);
// }

// console.log("Hello World");
// 2-masala

// if (a > 5){
//     console.log("Katta son chiqdi ", a);
// } else if (a === 5){
//     console.log("Teng son chiqdi ", a);
// } else if (a < 5) {
//     console.log("Kichkina son chiqdi ", a);
// }

// switch case default

let random = 3;

switch (random){
    case 0: {
        console.log("nol chiqdi"); break
    }
    case 1: {
        console.log("1 chiqdi"); break
    }
    case 2: {
        console.log("2 chiqdi"); break
    }
    case 3: {
        console.log("3 chiqdi"); break
    }
    default: {
        console.log("Bo`sh son chiqdi");
    }
}

if (random === 0){
    console.log("Nol chiqdi");
} else if (random === 1 || random === 2 || random === 3){
    console.log("Yomon");
} else {
    console.log("Boshqa son chiqdi");
}