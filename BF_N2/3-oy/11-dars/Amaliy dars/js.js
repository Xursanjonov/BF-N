let arrs = [
  { id: 6, name: "Sohibjon", age: 50, title: "DevOps" },
  { id: 7, name: "Komil", age: 53, title: "Java" },
  { id: 3, name: "Rashid", age: 26, title: "Flutter" },
  { id: 1, name: "Temur", age: 23, title: "Frontend" },
  { id: 2, name: "Bobur", age: 30, title: "Backend" },
  { id: 5, name: "Islom", age: 45, title: "IOS" },
  { id: 4, name: "Jamshid", age: 40, title: "Android" },
];

// 1) Ism orqali search qilish kerak ?

// let user = prompt("Ism kiriting: ");
// // let user = "Temur";

// function onSearch(a){
//     let res = arrs.filter((item)=>item.name.toLowerCase()===a.toLowerCase()).map((value)=>value.title);
//     return res
// }
// console.log(onSearch(user));

// 2) Kiritilgan id ni remove qilish kerak ?

let arr = [];

let onSort = ()=> {
    let res = arrs.map((val)=>val.id).sort();
    let b = res.map((key)=>{key})
    return b
};

console.log(onSort());