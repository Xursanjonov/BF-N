// let data = {
//     email: "ve.holt@reques.in",
//     password: "cityslicka",
// };

// fetch("https://reques.in/api/login", {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: { "Content-type": "application/json", },
// }).then((res) => res.json()).then((data) => { data.token; localStorage.setItem("token", token); });

let newUser = {
    fName: "Eshmat",
    lName: "Toshmatov",
    age: 32,
    county: "New York",
};

// axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
// axios.defaults.headers.token = "token_1";

// axios.post("/users", newUser).then((res) => {console.log(res.data);});

// axios.get("/todos", newUser).then((todo) => {console.log(todo.data);});

// axios.post("https://reques.in/api/login", 
// {
//     email: "axioses@amil.com",
//     password: "hello-Ax1oses1"
// },
// {
//     headers: {
//         token: "token_2",
//     }
// }
// ).then((todo) => {console.log(todo.data);});

(async function () {
    let {data} = await axios.get("https://localhost:300/users");
    newUser.forEach(user=> {
        let li = document.createElement("li");
        li.innerText = `${user.fName} ${user.lName} - ${user.age}`;
    });

    let 
})