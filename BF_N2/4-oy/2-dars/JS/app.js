    let plus = document.querySelector(".plus");
    let minus = document.querySelector(".minus");
    let output = document.querySelector(".output");

    // let localCount = localStorage.getItem("count");

    // if(localCount){ output.innerHTML = localCount; };

    // plus.addEventListener("click", () =>{
    //     output.innerHTML++; localStorage.setItem("count", output.innerText);
    // })

    // minus.addEventListener("click", () =>{
    //     output.innerHTML--; localStorage.setItem("count", output.innerText);
    // })

    // 2 - yozish
    // let greeting = document.querySelector(".greeting");
    // let fName = localStorage.fName;

    // if(!fName){
    //     greeting.innerHTML = "<input id='fName-input' class='from-control m-5 rounded-2' placeholder='Iltimos, Ismingiani kiriting'> <button class='btn btn-primary' onclick='saveName()'> Saqlash </button>";
    // } else {
    //     greeting.innerHTML = "<h1>Salom" + fName + "</h1> <button class='btn btn-primary' onclick='changeName()'> O`zgartirish </button>";
    // }
    // function saveName() {
    //     let input = document.querySelector("#fName-input");
    //     let fName = input.value;
    //     localStorage.fName = fName;
    //     greeting.innerHTML = "<h1>Salom" + fName + "</h1> <button class='btn btn-outline-danger' onclick='changeName()'> O`zgartirish </button>"
    // }

    // function changeName() {
    //     localStorage.removeItem("fName");
    //     greeting.innerHTML = "<input id='fName-input' class='from-control m-5 rounded-2' placeholder='Iltimos, Ismingiani kiriting'> <button class='btn btn-primary' onclick='saveName()'> Saqlash </button>";
    // }

    // 3-yozish JSON => JS Object Nation

    // let btn = document.querySelector("button");
    // let inputs = document.querySelector("input");
    // let ul = document.querySelector("ul");

    // let cars = JSON.parse(localStorage.cars || '[]');

    // function appendLi(text) {
    //     let li = document.createElement("li");
    //     li.classList.add("list-group-item");
    //     ul.append(li);
    //     li.addEventListener("dblclick", ()=>{
    //         let index = cars.indexOf(text);
    //         cars.splice(index, 1);
    //         localStorage.setItem("cars", JSON.stringify(cars));
    //         li.remove();
    //     })
    // }

// let elSelect = document.querySelector("select");
// elSelect.addEventListener("change", (e)=> {
//     localStorage.setItem("lang", e.target.value);
// });

elSelect.value = localStorage.setItem("lang") || "uz";

let body = document.querySelector("body");
let bodyBg = document.querySelector(".body-color");

body.addEventListener("click", ()=> {
    document.body.classList.toggle("bg-black");

    if(localStorage.getItem("mode") === "bg-black"){localStorage.setItem("mode", "bg-white");}
    else {localStorage.setItem("mode", "bg-black");}
});

let mode = localStorage.getItem("mode")