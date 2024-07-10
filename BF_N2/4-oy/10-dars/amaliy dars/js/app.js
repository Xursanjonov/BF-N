let ul = document.querySelector("#users-ul");

let div = document.createElement("div");
let h2 = document.createElement("h2");


axios.defaults.baseURL = "http://localhost:3000";

async function read() {
    axios.get(`/users`).then( (res) => {
        return res.data
    }).then((users)=>{
        users.forEach(e => {
            let li = document.createElement("li");
            let p1 = document.createElement("p");
            let p2 = document.createElement("p");
            let p3 = document.createElement("p");
            li.innerHTML = e.name;
            p1.innerHTML = e.username;
            p2.innerHTML = e.email;
            p3.innerHTML = e.phone;
            li.style.fontWeight = "800";
            li.style.width = "100%";
            li.style.cursor = "pointer";
            ul.append(li, p1,p2,p3)

            li.addEventListener("click", () => {
                let div = document.querySelector("#edit-user");
                let names = document.querySelector("#name");
                let usernames = document.querySelector("#username");
                let emails = document.querySelector("#email");

                names.value = e.name;
                usernames.value = e.username;
                emails.value = e.email;
                
                div.classList.replace("d-none", "d-block")
            })
        });
    });
};

read();