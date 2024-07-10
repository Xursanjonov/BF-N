document.addEventListener("DOMContentLoaded", async () => {
  axios.defaults.baseURL = "http://localhosr:5050/api/v1/";

  let token = localStorage.getItem.token;

  let form = document.querySelector("#formControl");
  let login = document.querySelector("#login");
  let signUp = document.querySelector("#sign");
  signUp.addEventListener("click", async () => {
    let username = document.querySelector("#username");
    let fname = document.querySelector("#fname");
    let lname = document.querySelector("#lname");
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");
    let phone = document.querySelector("#phone");
    let status = document.querySelector("#status");

    await axios.post(
      "/users",
      {
        body: {
          id: 0,
          username,
          firstName: fname,
          lastName: lname,
          email,
          password,
          phone,
          userStatus: status,
        },
      },
      { headers: { authorization: `Bearer ${token}` } }
    );
  });

  login.addEventListener("click", async () => {
    
  })

});
