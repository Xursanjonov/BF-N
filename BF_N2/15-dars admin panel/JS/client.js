document.addEventListener("DOMContentLoaded", () => {
    let clientForm = document.querySelector("#form-client");
    axios.defaults.baseURL = "http://loacalhost:5050/api/v1";

    clientForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        let product = form[0].value;
        let quantity = form[1].value;

        let {data: {token}} = await axios.get("/clients", {product, quantity});

        localStorage.setItem("ClientToken", token)
        console.log(localStorage.getItem("ClientToken"));
    })
})