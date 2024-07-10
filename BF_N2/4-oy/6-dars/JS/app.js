

// let i = 0;

// function a() {
//     console.log(++i);
//     a();
// }
// a();

// let eventElm = document.querySelector(".btn");
// let body = document.querySelector("body");
// setTimeout(()=> {
//     eventElm.textContent = "6-dars event loop";
//     console.log(eventElm);
// }, 2_000);
// console.log(eventElm.textContent);



// fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json()).then((data) => { console.log(data); }).catch(err => { console.log(err); });

// async function getUsers() {
//     try {
//         console.log("Sending requerst");
//         let res = await fetch("https://jsonplaceholder.typicode.com/photos");
//         console.log("Response");
//         console.log("Converting to JSON");
//         console.time("json");
//         let data = await res.json();
//         console.timeEnd("json");
//         console.log("Converting to JSON");
//         console.log(data);
//     } catch (err) {
//         console.log(err);
//     } finally {}
// }
// getUsers();

// Microtask Queue && Macrotask Queue

// console.log(1);

// setTimeout(() => {console.log(2); }, 0);

// queueMicrotask(() => { console.log(5); });

// Promise.resolve().then(()=> { console.log(3); });

// console.log(4);

// (async function getDAta() {
//     let baseUrl = "https://jsonplaceholder.typicode.com";    
//     let users = await fetch(`${baseUrl}/users`).then((res)=> res.json()); // 1 second   
//     let potos = await fetch(`${baseUrl}/potos`).then((res)=> res.json()); // 2 second   
//     let comments = await fetch(`${baseUrl}/comments`).then((res)=> res.json()); // 2 second   
//     let photos = await fetch(`${baseUrl}/photos`).then((res)=> res.json()); // 4 second   
//     let albums = await fetch(`${baseUrl}/albums`).then((res)=> res.json()); // 3 second   
//     let todos = await fetch(`${baseUrl}/todos`).then((res)=> res.json()); // 1 second   
    
//     console.log(users, potos, comments, photos, albums, todos);    
// })();

// Promise.all About

// (async function getDAta() {
//     let baseUrl = "https://jsonplaceholder.typicode.com";    
//     let users = fetch(`${baseUrl}/users`).then((res)=> res.json()); // 1 second   
//     let posts = fetch(`${baseUrl}/posts`).then((res)=> res.json()); // 2 second   
//     let comments = fetch(`${baseUrl}/comments`).then((res)=> res.json()); // 2 second   
//     let photos = fetch(`${baseUrl}/photos`).then((res)=> res.json()); // 4 second   
//     let albums = fetch(`${baseUrl}/albums`).then((res)=> res.json()); // 3 second   
//     let todos = fetch(`${baseUrl}/todos`).then((res)=> res.json()); // 1 second   
    
//     let data = await Promise.all([users, posts, comments, photos, albums, todos]);
//     console.log(data);    
// })();

(async () => {
  const rawResponse = await fetch('https://httpbin.org/post', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({a: 1, b: 'Textual content'})
  });
  const content = await rawResponse.json();
  console.log(content);
})();