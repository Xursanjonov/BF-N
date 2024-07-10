let str = "AABBBGTTYYYAAAK";
let key = "";
let sum = 1;

for(let value = 0; value < str.length; value += 1){
    if(str[value] === str[value+1]){
        sum++;
    } else {
        key += (sum === 1 ? "" : sum) + str[value];
        // key += sum === 1 ? "" + str[value] : sum + str[value];
        sum = 1;
    }
}
console.log(key);