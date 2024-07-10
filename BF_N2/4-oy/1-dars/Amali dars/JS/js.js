// 4
let numToStr = +prompt("Son kiriting: ");

let news = 0;

let numberStr = {
    1: 'bir',
    2: 'ikki',
    3: 'uch',
    4: 'to`rt',
    5: 'besh',
    6: 'olti',
    7: 'yetti',
    8: 'sakkiz',
    9: 'to`qqiz',
    10:'o`n',
    20:'yigirma',
    30:'o`ttiz',
    40:'qiriq',
    50:'ellik',
    60:'otmish',
    70:'yetmish',
    80:'sakson',
    90:'to`qson',
    100:'yuz',
}

for(let key in numberStr){
    if(numToStr == key){
        news = numberStr[key]
    }
    return news
}

console.log(news);