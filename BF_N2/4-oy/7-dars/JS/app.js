// Fetch => Get

let usersList = document.querySelector("#users");

let params = new URLSearchParams(window.location.search);
let id = params.get("id");

if(id){
    fetch("https://jsonplaceholder.typicode.com/users" + id)
    .then((res)=> res.json())
    .then((user)=> {
        let h1 = document.createElement("h1");
        let h2 = document.createElement("h2");
        let p = document.createElement("p");
        let a = document.createElement("a");
        h1.innerText = user.name;
        h2.innerText = user.username;
        p.innerText = `${user.email}, ${user.phone}, ${user.website}`;
        a.innerText = "Go back";
        a.setAttribute("href", `/`);
        document.body.prepend(a, h1, h2, p);
    })
} else {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=> res.json())
    .then((users)=> {
        users.forEach((user) => {
        let li = document.createElement("li");
        let h2 = document.createElement("h2");
        let h4 = document.createElement("h4");
        let p = document.createElement("p");
        let a = document.createElement("a");
        h2.innerText = user.name;
        h4.innerText = user.username;
        p.innerText = `${user.email}, ${user.phone}, ${user.website}`;
        a.innerText = "Read more";
        a.setAttribute("href", `/?id=${user.id}`);
        li.append(h2, h4, p, a);
        usersList.append(li);
        });
    });
}