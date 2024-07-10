document.addEventListener("DOMContentLoaded", async () =>{
    axios.defaults.baseURL = "http://localhost:5050/api/v1";

    let userForm = document.querySelector("#formUsers");

    userForm.addEventListener("submit", async function(e) {
      e.preventDefault();
      let name = form[0].value;
      let phoneNumber = form[1].value;
      let password = form[2].value;

      let { data } = await axios.post("/users", {
        name,
        phoneNumber,
        password,
      });
      console.log(data);

      // localStorage.setItem("NewUserToken", token);
      // console.log(localStorage.getItem("NewUserToken"));
    });

})