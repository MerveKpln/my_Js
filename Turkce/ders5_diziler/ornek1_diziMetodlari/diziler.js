const yaslar=[5,10,28,42];
const isimler =["Hakan","Alaattin","Furkan","Dayanch",20,40,true,23.4,yaslar,"ayse"];

console.log(isimler);

console.log(isimler[3]);

console.log(isimler[3]="Sadi");
console.log(isimler);

//const degistirilemiyordu ama non-primitive`lerde(arrayerde)
//degistirilebiliyor.Dizi bir adres gosterir isimler gibi ,
// o yuzden primitive den farklidir

isimler[isimler.length-2]=false;
console.log(isimler[8][1]);
//console.log(isimler[isimler.length-1][1]);

console.log(isimler);

//**DIZIYI DEGISTIREN METHODLAR */

let meyveler =["elma","armut","muz","kivi"];

const yeniBaslik=document.querySelector(".baslik");

 
//pop() en son elemani siler 
//log icinde yazilirsa sildigini yazdirir

//meyveler.pop();//elma,armut,muz
console.log(meyveler.pop());

//shift() dizinin 0 indexli elemanini yani ilk elemani siler 
//ve yazdirirsak sildigi elemani dondurur
//meyveler.shift();//armut,muz
console.log(meyveler.shift());//elma

//silme methodlari log da yazdirilirsa sildigi elemani dondurur

//push() dizinin sonuna eleman ekler
meyveler.push("cilek","kavun");

//unshift() dizinin 0 indexine eleman ekler
meyveler.unshift("ayva");


//reverse() dizinin tamamini tersine cevirir
meyveler.reverse();

//sort() diziyi natural order (alfabetik siralar)

meyveler.sort();

//splice() diz
//armut,ayva,cilek,kavun,muz
meyveler.splice(1    ,    0    ,"erik");//armut,erik,ayva,cilek,kavun,muz
              //index  silmeden ekle
//0 deyince silmeden araya ekle

meyveler.splice(4    ,    1    ,"uzum");//armut,erik,ayva,cilek,uzum,muz
            // index    silerek ekle
//1 deyince sil sildigin yere ekle


//ilk kod = eleman eklenecek index
//2. kod= 1 ise o indexteki elemani silerek ,
        //0 ise eleamni silmeden ekle
//3.kod= eklenecek veri

yeniBaslik.textContent=meyveler;
console.log(meyveler);

//**DIZI ERISIM METHODLARI */
//Bunlar diziyi degistirmezler

const sayilar =[3,4,5,2,"2","uc","bes","iki",5,2,7]


//includes() kapsiyor mu?
//true -false doner
console.log(sayilar.includes("5"));//false
console.log(sayilar.includes(5));//true


//indexOf() kapsiyor mu?
console.log(sayilar.indexOf(2));

console.log(sayilar.lastIndexOf(5));

console.log(sayilar.lastIndexOf(2   ,      4));//8 "2`yi 4. indexten sonra aramaya baslar"
                        // aranan deger  4. indexten itibaren

//join() dizinin elemanlarini birlstirip str hale getirir
console.log(sayilar.join());
console.log(sayilar.join("-"));
//join default virgullerle ayirarak diziden kurtarir ama istersek
//" " yazarak bosluklarla "-" yazarak - lerle ayirabiliriz

//toString () join gbidir ama sadece vigulle ayirir
console.log(sayilar.toString());
 

//********* */

const arabalar =["bmv","mercedes","Volvo","sahin","anadol"];//sort yaparsak buyuk harf once siralanr

//slice() 
console.log(arabalar.slice(2)); //2. indexli elemandan itibaren sonuna kadar

console.log(arabalar.slice(1,3));// ilk index dahil 2. sirada yazan index`e kadar (2 dahil degil)


yeniBaslik.textContent=sayilar;
console.log(sayilar);


//**CONCAT */

const birlesik= sayilar.concat(arabalar,true,[3,4,5]);
console.log(birlesik);
