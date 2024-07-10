let usersArr = [];
let form = document.querySelector("#form");

// User
// John doe
// +998901234567
// iamadmin

axios.defaults.baseURL = "http://localhost:5050/api/v1";

// form.addEventListener("submit", async function (e) {
//   e.preventDefault();
//   let phoneNumber = form[0].value;
//   let password = form[1].value;
//   let {
//     data: { token },
//  } = await axios.post("/auth", {
//     phoneNumber: phoneNumber,
//     password: password,
//   });

//   localStorage.setItem("token", token);
// //   console.log(localStorage.getItem("token"));
// });


// form
// console.log(form);

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  let name = form[0].value;
  let phoneNumber = form[1].value;
  let password = form[2].value;
  let token = localStorage.getItem("token");
  await axios
    .post(
      "/users?", { name: name, phoneNumber, password }, { headers: { authorization: `Bearer ${token}` }, }
    )
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
    
   let {data} = await axios.get("/users", { headers: { authorization: `Bearer ${token}` }, });
   usersArr.push(data);
   console.log(usersArr);
});
