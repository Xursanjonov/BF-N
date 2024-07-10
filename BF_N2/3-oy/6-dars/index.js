// String methods

// let str = "Lorem ipsum dolor sit amet. Eshmat +998901234567"

// console.log(str.length);
// console.log(str.charAt(3));
// console.log(str.charCodeAt(22));
// console.log(str.concat('Eshmat', 'Toshmat'));
// console.log(str.includes("j"));
// console.log(str.indexOf("a"));
// console.log(str.lastIndexOf("a"));
// console.log(str.padEnd(10, "0"));
// console.log(str.padStart(10, "0"));
// console.log(str.repeat(3));
// console.log(str.replace(" ", ","));
// console.log(str.replaceAll(" ", ","));
// console.log(str.search(/\+9989*/));
// console.log(str.slice(14));
// console.log(str.split(" "));
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// console.log(str.trim());
// console.log(str.trimStart());
// console.log(str.trimEnd());

// Array methods

// let arrays = ["Apple", "Lime", "Banana", "Cherry", "Strawberry", "Water melon"];

// console.log(arrays.length);
// console.log(arrays.concat(["Pear", "Lime"], ["Strawberry", "Water melon", ["Pineapple"]]));
// console.log(arrays.flat(2));
// console.log(arrays.includes("apple"));
// console.log(arrays.indexOf("Apple"));
// console.log(arrays.lastIndexOf("Apple"));
// console.log(arrays.lastIndexOf("apple"));
// console.log(arrays.join(" -> "));
// console.log(arrays.reverse());
// console.log("arrays".split("").reverse().join(""));
// console.log(arrays.slice(1, 3));
// console.log(arrays.sort());
// console.log(arrays.sort().reverse());

// arrays.push("Strawberry"); oxiridan add qiladi
// arrays.unshift("Strawberry"); boshidan add qiladi
// arrays.pop();
// arrays.shift();
// arrays.splice(2, 0, "Pear", "Pineapple");
// arrays.splice(arrays.length, 0, "Pear", "Pineapple"); // push
// arrays.splice(0, 0, "Pear"); // unshift
// arrays.splice(arrays.length, -1, 1); // pop
// arrays.splice(0, 1); // shift

// console.log(arrays);



// Amaliy dars

let arr = ["olma", "limon", "anor", "behi", "ananas"]
// 1-so`rov
let nomi = prompt("Qaysi mevani o`chirmoqchisiz ? ");

a = arr.indexOf(nomi);

arr.splice(a, 1);
// 2-so`rov
let add = prompt("Qaysi mevani qo`shmoqchisiz ? ");
// 3-so`rov
let indexs = prompt("Qaysi indexdan qo`shmoqchisiz ? ");

arr.splice(indexs, 0, add);
// 4-so`rov
let names = prompt("Qaysi mevani nomini o`zgartirmoqchisiz ? ");
// 5-so`rov
let add_2 = prompt("Qaysi mevani nomiga o`zgartirmoqchisiz ? ");

b = arr.indexOf(names);

arr.splice(b, 1, add_2);

console.log(arr);