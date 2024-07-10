let arr = ["olma", "anor", "limon", "nok", "behi", "ananas"];

for (let a = 0; a < arr.length; a+=1) {
    let value = arr[a];
    value = value.split('');
    for (let i in value){
        if (i % 2 !== 0){
            let j = value[i].toUpperCase()
            value.splice(i, 1, j);
        }
    }
    arr[a] = value.join('')
}
console.log(arr);