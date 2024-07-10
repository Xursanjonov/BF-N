let btn = document.getElementById("btn");
let btns = document.getElementsByClassName("maxsus");

let elements = document.getElementsByTagName("body");
let element = document.getElementsByName("street");

let fname = document.querySelector(".maxsus"); // id => #, class => (.), universal => (*)=> X ishlatilmaydi

let lname = document.querySelectorAll("[name='street']");

console.log(elements);
console.log(btns.length);

// changing styles
btn.style.backgroundColor = "black";
btn.style.Color = "#ff0000";
btn.style.fontSize = "3rem";
btn.style.padding = "1em";

console.log(btn);