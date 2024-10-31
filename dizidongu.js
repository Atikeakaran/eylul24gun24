let dizi = ["Betül", "Seviye", "Güneş", "Ati", "Nur", "Gürkan", "Burak"];

//dizi birleştirme
let birlesik = dizi.join("<>");
console.log(birlesik);

//dizi üzerinde dönme yöntemleri
/* 
for : Bir kod bloğunu belirtilen sayıda döngüye alır.
for/in : Bir nesnenin özelliklerini döngüye alır.
for/of : Yinelenebilir bir nesnenin değerlerini döngüye alır. */

// 1:for
for (let i = 0; i < dizi.length; i++)
    console.log(i + " " + dizi[i]);

console.log("-----------------------------");

//2. for .. in
for (const i in dizi)
    console.log(i + " " + dizi[i]);
console.log("-----------------------------");

//3. for .. of
for (let oge of dizi)
    console.log(oge);
console.log("-----------------------------");

//4. forEach method
dizi.forEach(function (value, index) {
    console.log(index + " : " + value);
});
console.log("-----------------------------");

//4.1 forEach method kısa yazımı
dizi.forEach((v, i) => console.log(i + " > " + v));
console.log("-----------------------------");

//5 while 
let sayac = 0;
while (sayac < dizi.length)
    console.log(sayac + " / " + dizi[sayac++]);
console.log("-----------------------------");

// dizi ters çevirme
for(let i= dizi.length -1; i>=0; i--){
    let oge = dizi[i];
    console.log(i + " " +oge)
}