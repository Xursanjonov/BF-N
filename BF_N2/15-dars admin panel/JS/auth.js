document.addEventListener("DOMContentLoaded", () => {
  axios.defaults.baseURL = "http://localhost:5050/api/v1";

  let form = document.querySelector("#form");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    let name = form[0].value;
    let phoneNumber = form[1].value;
    let password = form[1].value;
    let {
      data: { token },
    } = await axios.post("/auth", {
      name,
      phoneNumber,
      password,
    });
    localStorage.setItem("Admin", name);
    localStorage.setItem("AdminToken", token);
    console.log(localStorage.getItem.AdminToken);
    // AdminToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjU3MTQyMTgzMTUwNGMxOWZjMmMyM2U0IiwiaWF0IjoxNzAyMDE2ODU3fQ.8wAv-3qZdBm4hs54OJlhsD9OTkYV2pzy37FDm4igcI8";
  });
});
