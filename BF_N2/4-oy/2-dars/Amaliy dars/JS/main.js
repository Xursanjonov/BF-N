let users = document.querySelector(".users");
let theme = document.querySelector(".theme");
let size = document.querySelector(".size");

let save = document.querySelector(".save");
let clear = document.querySelector(".clear");

theme.addEventListener("change", ()=> {
    if(theme.textContent === "Light"){
        document.body.classList.add("bg-white");
    } else if(theme.textContent === "Dark") {
        document.body.classList.add("bg-black");
        document.body.classList.remove("bg-light");
    }
});

size.addEventListener("change", ()=> {
    
})