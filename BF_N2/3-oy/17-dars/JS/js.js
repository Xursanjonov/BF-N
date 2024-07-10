// //1-Problem 2 darajasi
// const number = (a) => {
//     let sum = 0;
//     for (let i = 1; i <= a; i++){
//         sum += i * ((a - i) + 1);
//     }
//     return sum;
// }

// let res = number(4);

// console.log(res);

//2-Problem 1 darajasi
// const getSum = (n) => n.toString().splite("").reduce((acc, el)=> acc + el, 0);
// let rese = getSum(1589);

// console.log(rese);

// let arr = [1589, 31851, 512, 78, 180975];
// let ress = arr.map((el) => el.toString().length);

// console.log(ress);

// 3-problem
function getTotalPrice(students, ids){
    let sum = 0;
    let count = 0;
    for (let el of students) {
        if(el.grade === n){
            sum += el.grade;
        }
    }
    return sum/count;
}

const students = [
  { name: "Abdulaziz", percent: 96, grade: 5 },
  { name: "Diyorbek", percent: 84, grade: 4 },
  { name: "Nodirbek", percent: 93, grade: 5 },
  { name: "Behro’z", percent: 65, grade: 3 },
  { name: "Jurabek", percent: 90, grade: 5 },
  { name: "Umrzoq", percent: 75, grade: 4 },
];

let n = 5;

let res = getTotalPrice(students, n);

console.log(res);