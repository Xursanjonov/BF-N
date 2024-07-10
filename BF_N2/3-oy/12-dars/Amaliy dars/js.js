let title = document.querySelector(".title");
let incre = document.querySelector(".incre");
let decre = document.querySelector(".decre");

let getVal = 0;


function getValues() {
    title.textContent = getVal;
}

let decreFun = () => {
    getVal++;
    getValues();
};

let increFun = () => {
    getVal--;
    getValues();
};

decre.addEventListener("click", decreFun);

incre.addEventListener("click", increFun);

// tasbeh

let number = document.querySelector(".number");
let item1 = document.querySelector(".item1");
let item2 = document.querySelector(".item2");

let num = 0;

function sums() {
    number.textContent = num;
}

let reset = () => {
    num = 0;
    sums();
}
let qoshish = () => {
    num++;
    sums();
}

item2.addEventListener("click", qoshish);
item1.addEventListener("click", reset);