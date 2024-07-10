// let a = 0;

// qiziqarli code =>
// function log() {
//     console.log("Ishga Tushdi 👍");
// }
// log``;

// // let b = a || 3; // falsy => false, 0, -0, NaN, "", '', ``, null, undefined, 0n
// // let c = a && 4;
// // let d = a ?? 5; // nullish => undefined || null

// let fName = "Eshmat";
// let age = 32;
// let e = "Salom, " +fName + "! Siz "+ age + " yoshdasiz";
// let f = `Salom, ${fName}! Siz ${age} yoshdasiz`; // Template literal, Interpolation

// // console.log(e);
// console.log(f);

// optional chaining

// let person = {
//     fName: "Eshmat",
//     address: {
//         city: {
//             name: "Toshkent",
//             coordinates: {
//                 lat: 12.1243,
//                 lng: 43.3423525,
//             },
//         },
//         district: "Uchtepa",
//         street: "Al Xorazmiy",
//         apartment: 46,
//     },
//     skills: ["HTML", "CSS", "JS"],
//     talk: ()=> {
//         console.log("Eshmat is talking");
//     },
// };

// console.log(person?.address?.city?.coordinates?.lat);
// console.log(person?.skills?.[0]);

// if(person){
//     if(typeof person.talk === "function"){
//         person.talk()
//     }
// }

// person?.talk?.();

// Ternary operator
// let n = 12;
// let s = n > 30 ? 4 : n > 20 ? 5 : 6; // ternary

// if(a>30){
//     s = 4;
// } else if(a>20){
//     s = 5;
// } else {
//     s = 6;
// }

// function getUser() {
//     // backend
//     // .....

//     return {
//         status: 200,
//         messege: "ok",
//         data: {fName: "Eshmat", age: 32, id: 34534},
//     };
// }

// let {data: user} = getUser();
// // let response = getUser();
// // let user = response.data;

// let [, cher] = ["Apple", "Banana", "Cherry"];

// console.log(user.fName, user.age, user.id);
// console.log(cher);

