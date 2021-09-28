//===============FONKSIYONLAR==============

//!1. YONTEM: fUNCTION DECLARATION
//DECLARRATION yontemi ile fonk`nun tanimlanmasi ve cagirilmasindan once veya sonra olabilir


//function tanimlanmasi
function yazdirAd(){
    console.log("merve");
}

// fonsiyonun cagirilmasi
yazdirAd();//merve

//ornek: klavyeden girilen sayinin tek mi cift mi oldugunu gosteren bir fonk yaziniiz

const sayiniz = prompt("Lutfen sayinizi giriniz");

console.log(tekCift(sayiniz));  

function tekCift(sayi) {
   return sayi%2==0 ? `${sayi} cifttir` :`${sayi} tektir`
}

//!2. YONTEM : FUNCTION EXPRESSION(bu yontem daha yaygin)
//ornek1
const tekCift1= function(sayi) {
    sayi%2==0 ? `${sayi} tektir` : `${sayi} tektir`;
}
//console.log(tekCift1(5));

//ornek2: verilen 3 sayidam en buyuk sayiyi bulma:
let buyukBul= function(x,y,z){
    let enBuyuk;
    if (x>y && x>z) {
        enBuyuk=x;
    }
    else if (y>z && y>x) {
        enBuyuk=y;
    }
    else enBuyuk=z;

    return enBuyuk;
}
console.log(buyukBul(1,9,12));



//!3. YONTEM: FUNCTION ARROW(ok)

const ciftMi= (sayi) =>(sayi%2==0? "tek": "cift");

console.log("sayi : " + ciftMi(7));
const ciftMi1= (sayi) =>(sayi%2==0? `${sayi} tektir` : `${sayi} cifttir`);

//ornek:
const taban = prompt("taban giriniz: ");
const us = prompt("us giriniz");

const usAl= (taban,us) =>taban**us;

console.log(usAl(taban,us));
