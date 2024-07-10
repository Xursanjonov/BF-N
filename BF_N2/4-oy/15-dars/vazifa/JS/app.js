let body = document.querySelector("body");

axios.defaults.baseURL = "http://localhost:5050/api/v1";

async () => {
    let {data} = await axios.get("/products", { headers: { authorization: `Bearer ${token}` }, });
    let div = document.createElement("div");
    div.append(data);
    body.append(div);
    console.log(data);
}