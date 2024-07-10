let input = document.querySelector(".input");
let day = document.querySelector(".day");
let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");
let pmam = document.querySelector(".pmam");

function dsTimes() {
  let now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  hour.innerHTML = hours.toString(10).padStart(2, "0");
  minute.innerHTML = minutes.toString(10).padStart(2, "0");
  second.innerHTML = seconds.toString(10).padStart(2, "0");
}

dsTimes();
setInterval(dsTimes, 1000);

function dsPMAM() {
  let now = new Date();

  let hours = now.getHours();

  let pmams = "";

  if (hours < 12) {
    pmams = "A.M.";
  } else {
    pmams = "P.M.";
  }
  pmam.innerHTML = pmams;
}

dsPMAM();
setInterval(dsPMAM, 360000);

(function () {
  let now = new Date();

  let date = now.getDate().toString(10).padStart(2, "0");
  day.innerHTML = date;
})();
