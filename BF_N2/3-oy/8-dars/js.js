// Loop

// let meva = [
//     "Apple",
//     "Anor",
//     "Nok",
//     "Behi",
//     "Orik",
//     "Limon",
//     "Banan",
// ];

// let str = "Lorem ipsum dolor sit amet."

// let person = {
//     fname: "Eshmat",
//     lname: "Toshmatov",
//     email: "eshmat1991@gmail.com",
//     age: 32,
//     isMerried: true,
//     country: "London",
// };

// for
// for, for ... in, for ... of

// for (let key in person){
//     console.log(key);
// }

// console.log();
// for (let key in person){
//     console.log(key, person[key]);
// }


// for (let fruit of meva){
//     console.log(fruit);
// }

// for (let char of str){
//     console.log(char);
// }

// for (let i = str.length - 1; i >= 0; i--){
//     console.log(str[i]);
// }

// for (let i = 0; i < str.length; i++){
//     console.log(str[i]);
// }

// for (let i = 0; i < meva.length; i++){
//     console.log(meva[i]);
// }

// white loop

let password = "1234"
let input = prompt("Parol kiriting ?");

let off_on = false;

// while (!off_on){
//     if(password === input){
//         off_on = true;
//     } else {
//         input = prompt("Topolmadingiz qaytadan, Parol kiriting");
//     }
// }

// 3 marta urinish orqali tekshirish
let chanss = true;
// let chans = 3;

while(chanss){
    if(password === input){
        chanss = false;
        console.log("To`g`ri 👍");
    } else {
        input = prompt("Topolmadingiz qaytadan, Parol kiriting");
    }
}

// while(chans){
//     chans--
//     if(password === input){
//         chans = false;
//         console.log("To`g`ri 👍");
//         chans = 0;
//     } else {
//         input = prompt("Topolmadingiz qaytadan, Parol kiriting");
//     }
// }

// if(chans === 0){
//     console.log("3 marta xato urinish 👎");
// }