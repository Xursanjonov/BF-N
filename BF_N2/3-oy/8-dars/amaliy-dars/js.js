// 1-misol
// sharti => let number = 12355; ushbu number raqmlar yig`indisini toping ?

let number = 12355;
let cuma = 0
let s = number

while(number > 0){
    number %= 10;
    cuma += number;
}
console.log(cuma);


// 2-misol
// Array ning ichidagi toq sonlar yig`indisini topish ?
let arr = [12,3,4,8,3,55,8,8,21,7,67];
let sum = 0;

for (let key in arr){
    if(arr[key] % 2 === 1){
        sum += arr[key];
    }
}

// console.log(sum);

// 3-misol

let array = [12,3,4,8,3,5,8,8,21,22,8];
let max = array[0];

for (let i = 0; i < array.length; i++) {
    if (max<array[i+1]) {
        max=array[i+1]
    }
}

// console.log(max);