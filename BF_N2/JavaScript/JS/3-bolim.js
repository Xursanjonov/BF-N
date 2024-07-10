// Talab Operatorlari

//1 => try, catch and finally

// try { Asosiy bo`lim }
// catch ( Xato ) { Xatolik bo`lim }
// finally { Yakuniy bo`lim }

// let x = "Full name"

// try {
//     x.toString();
// } catch (Xato) {
//     if (Xato instanceof ReferenceError) {
//         alert(`${Xato.name}: Elon qilinmagan!`);
//     } else alert(Xato.message);
// } finally {
//     console.log("satrga O`girildi.");
// }


//2 => throw -> ( xatolik )

// let nuqson = new Error("Nozik kamchilik yuz berdi");
// nuqson.name = 'QaltisNuqson';
// try { throw(nuqson); }
// catch (xato) { console.log(xato); alert(xato.name); }


//3 => WEB API <=> asyne and await

// Pending (Kutish) => boshlang`ich vaziyat, hali bajarilish nihoyasiga yetmadi va bekor ham qilinmadi.
// Funfilled (Bajarildi) => kod muvafaqqiyatli amalga oshirildi.
// Rejected (Rad_etildi) => bekor qilindi.

// new Promise(function(buyruq, bekor) {
//     // ...
//     buyruq(qiymat);
//     bekor(qiymat);
// });

// function birbarkayigaEmas() {
//     return new Promise((buyruq, bekor)=> {
//         const val = Math.round(Math.random());
//         val? buyruq("Buyruq bajarildi") : bekor("Bekor qilindi");
//     })
// }

// async function bajar() {
//     try {
//         const b = await birbarkayigaEmas();
//         console.log(b);
//     } catch (x) { console.log(x); }
// }
// bajar()
// bajar()

// setTimeout(alert, 1000, 5); console.log(11); => 1-ekranga 11 chiqadi keyin 5 chiqadi.

