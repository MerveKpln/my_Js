//*****DİZİLERDE İTERASYON****** */

//****FOR DÖNGÜSÜ******

//const koordinatlar = [120, 100, -100, 220, 330, -50];

// let pozitif=0;
// let negatif=0;

// for(let i =0; i<koordinatlar.length; i++){



//  koordinatlar[i] < 0 ? negatif=negatif+koordinatlar[i] : pozitif = pozitif+ koordinatlar[i];
// }
// console.log(`negatifler toplamı: ${negatif} pozifler toplamı: ${pozitif}`);



//**FoR `IN DONGUSU */

const koordinatlar = [120, 100, -100, 220, 330, -50];

let pozitif=0;
let negatif=0;

for(let i =0; i<koordinatlar.length; i++){



 koordinatlar[i] < 0 ? negatif=negatif+koordinatlar[i] : pozitif = pozitif+ koordinatlar[i];
}
console.log(`negatifler toplamı: ${negatif} pozifler toplamı: ${pozitif}`);

// SORU: Bir hayvanat bahçesinde bulunan hayvan türlerinin
// bir dizide saklandığı varsayalım.Bu hayvanları türüne
// göre aramamızı sağlayacak ve o türden kaç adet bulunduğunu
//  ana programa döndürecek fonksiyonu yaziniz. Eğer o
// türden bir hayvan yok ise bulunamadığını yazdırsın.


const hayvanlar =["aslan","fil","kartal","kanarya","aslan" ,"aslan","timsah"];
//const ara=prompt("Sayisini merak ettiginiz hayvanin adini yaziniz");
const bulDondur=function(ara){
let hayvanSayisi=0;
for(let i in hayvanlar){//hayvanlar dizisinde donecek
    if (ara==hayvanlar[i]) {
        hayvanSayisi++;
    }
    
}
alert(`Aradiginiz ${ara} dan ${hayvanSayisi} tane vardir`);
}
//bulDondur(ara);//fonk cagirmasini fonk yazdiktan sonra cagirmaliyiz


//**FOR OF DONGUSU */
//for of dongusu, for in dongusunun bir cok veri yapisini kapsayacak sekilde guncellenmis halidir. 
//Bu dongude dizi icersindeki veriye erisirken indisleme kullanmaya gerek yoktur.

let arabalar=["BMW","Volvo","Mini"];
for (let i of arabalar){
    console.log(i);//kendisi gelir
}
for (let i in arabalar){//index`i gelir
    //console.log(`${i}. araba ${arabalar[i]}`);
    console.log(arabalar[i]);
}
//**FOREACH METHOD */
//! foreach methodu orjina diziyi bozmaz

let ogrenciler= ["onur","hakan","furkan"];
ogrenciler.forEach((x)=>console.log(x));
//log icine yazilirsa cikti undefined olur.Yani bize bir sey dondurmez

ogrenciler.forEach((deger,index)=>console.log(index + " .kisi "+
deger + " dir"));

console.log(ogrenciler);

//**MAP METHOD */

//! map methodu orjinal diziyi degistirmez
//ornek: butun elemanlarin 3 katini alin))
const rakamlar = [3,5,3,2,6,7,9];
//console.log(rakamlar.map((x)=>x*3));
rakamlar.map((x)=>x*3).forEach((x)=> console.log(x)); //buda yuaridki ile ayni

console.log(rakamlar.map((x,index)=>`${index+1}. elemanin 3 kati ${x*3}`));

//isimler dizisinin icindeki isimleri her ismi buyuk harf olarak yeni bir diziye sakla
const isimler = [
    "Ahmet",
    "mehmet",
    "ismet",
    "SAFFET",
    "Can",
    "Canan",
    "Cavidan",
  ];
  //map methodu bir dizi dondurur
 const buyukHarf= isimler.map((isim)=>isim.toUpperCase());
 console.log(buyukHarf);

 document.querySelector(".baslik").textContent =buyukHarf.join("=>");

 //**FILTER METHOD */
 //ORNEK 
 //fiyatlar dizisindeki 250 den buyuk fiyatlari yazdir
 const fiyatlar=[120,260,300,322.5,400,768];
 const buyukler=console.log(fiyatlar.filter((x)=> x>250));

 //-------------- ÖRNEK -------------------
// maası 4000 $`dan düsük olanlara %50 zam yapmak istiyoruz
// ve bunu ayri dizi olarak saklamak istiyoruz.
const maaslar = [3000, 5000, 4000, 6000, 6500];

const yeniMaas=maaslar.filter((t)=> t<=4000).map((t)=>t*1.5);
console.log(yeniMaas);

//-------------- ÖRNEK -------------------

const adlar = [
  "Samet",
  "Hakkı",
  "Duygu",
  "Emrullah",
  "Bilal",
  "Ali",
  "Ahmet",
  "Hasan",
  "Defne",
  "Serdar",
];
//a ile baslayanlari console da yazdiralim
adlar.filter((t)=>t.startsWith("A")).forEach((x)=> console.log(x));
//**REDUCE METOD */
//! reduce cikis  methodudur. bundan sonra for each calismaz

const maaslarim= [3000,5000,4000,2000,1000];
console.log(maaslarim.reduce((x,y)=>x+y,  0));
                                      //int toplam=0
