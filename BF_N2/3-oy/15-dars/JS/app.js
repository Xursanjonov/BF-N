let salom = "My teacher Alisher brother";
let h1 = document.querySelector("h1");

(function type(str) {
    let direction = "inc";
    setInterval(() => {
        if(h1.textContent.length === str.length) direction = "dec";
        else if(h1.textContent.length === 0) direction = "inc";

        if(direction === "inc") h1.textContent += str[h1.textContent.length];
        else h1.textContent =  h1.textContent.slice(0, h1.textContent.length - 1);
    }, 300);
})(salom);