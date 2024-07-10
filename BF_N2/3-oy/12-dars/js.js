let images = [
 "https://upload.wikimedia.org/wikipedia/commons/7/70/Bugatti_Divo_-_Mondial_de_l%27Automobile_de_Paris_2018_-_001.jpg                      ",
 "https://w.forfun.com/fetch/3b/3b9531d8529d0bf983745e357031f681.jpeg",
 "https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=249379372584362&get_thumbnail=1",
];

let imageElem = document.querySelector(".image");

console.log(imageElem.getAttribute("alt"));
let i = 0;
imageElem.setAttribute("src", images[i]);

setInterval(() => {
    if(++i === images,length){ i = 0; }
    imageElem.setAttribute("src", images[i]);

}, 1000);