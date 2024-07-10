let divElem = document.querySelector("div");
let tilteElem = document.querySelector(".tilte");
let inputElem = document.querySelector(".number");
let checkElem = document.querySelector(".form .check");
let resetElem = document.querySelector(".form .reset");

// let num = Math.floor(Math.random() * 21);
let num = 5;
let sum = 20;

function numebrFunc() {
    inputElem.addEventListener("change", (ex)=> {
        let n = e.target.inputElem()
        console.log(n, typeof n);
    })
}

numebrFunc()