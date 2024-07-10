let obj = {
  fName: "Sardor",
  sName: "Botirov",
  age: 23,
  address: {
    city: "Samarkand",
    street: "Amur temur",
    location: [
      {
        long: 123.12312312,
        lat: 3423423.35235245,
      },
      "Uzbekistan",
      { num: 12 },
    ],
  },
};

let {address:{location:{num}}} = obj;

console.log(num);