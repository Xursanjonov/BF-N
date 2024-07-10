let array = [];

(async function getDAta() {
    let users = await fetch(`https://jsonplaceholder.typicode/users`).then((res)=> res.json()); // 1 second   
    
    array.push(users);
    console.log(data);
})();