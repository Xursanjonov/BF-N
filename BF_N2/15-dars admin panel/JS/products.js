document.addEventListener("DOMContentLoaded", async () => {
  axios.defaults.baseURL = "http://localhost:5050/api/v1";
  let productForm = document.querySelector("#product-form");
  let AdminToken = localStorage.getItem("AdminToken");

  productForm.addEventListener("/products", async (e) => {
    e.preventDefault();

    let name = form[0].value;
    let exists = form[1].value;
    let price = form[2].value;
    let color = form[3].value;
    let description = form[4].value;
    let image = form[5].value;
    let category = form[6].value;
    let sale = form[7].value;

    let { data } = await axios.post(
      "/products",
      { name, exists, price, color, description, image, category, sale },
      {header: {token: AdminToken} }
    );
    console.log(data);

    let { data2 } = await axios
      .get("/products", AdminToken)
      .then((data2) => console.log(data2.name));
    console.log(data2);
  });
});
