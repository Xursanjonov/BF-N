let submitBtn = document.querySelector(".submit");
let username = document.querySelector(".username");
let password = document.querySelector(".password");

let array = [];

axios.defaults.baseURL = "https://fakestoreapi.com";

let getFuc = async function() {
    await axios.get("/users").then((users) => {
        array.push(users.data)
    })
}
getFuc()

console.log(array);