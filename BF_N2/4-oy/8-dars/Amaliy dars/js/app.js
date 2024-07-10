// let divElm = document.querySelector("#div_1");
let div_2 = document.querySelector(".div2");

// let divCard = document.createElement("div");

// axios.defoults.baseURL = ""


let write = async function () {
    axios.post("http://localhost:3000/users").then((res) => {
        div_2.append(res)
        return res;
    }).then((res)=> console.log(res?.response?.data)).catch((rej)=> console.log(rej))
}

console.log(div_2);