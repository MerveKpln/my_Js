"use strict";//eger bir hata olursa gosteriyor
//**NESNELER */

//diziler sirali bellek bolgeleridir.
//Dolayisiyla dizilerde erisim index ile olur
//Eger diziler karisiksa(nesne) indexle erisim guclugu ortaya cikar bu yuzden:

//!OBJECT(nesne)

//nesnelerde aradigimiz veriye erismek icin key adini kullanmamiz gerekir
//Nesnelerde key-value (property-value) yapisi kullanilir.
//Nesnelerde aradigimiz veriye erismek icin key kullanmak gerekir.
const insan={
    ad:"Kenan",
    soyad:"Kul",
    yas:30,
    meslek:"developer",
    diller:["Java","JS", "SQL","HTML"],
};
console.log(insan);

//1. cagirma yolu(dot notasyonu)
console.log(insan.ad);
console.log(insan.diller);

//2. cagirmayolu(koseli parantezle)
console.log(insan["ad"]);
console.log(insan["diller"]);

console.log(`Ad ${insan.ad} ve yas ${insan.yas}`);

//promttan gelen ifade string gelir
//yani "" 'dir. BU yizden ["ad"] olan cagirma yontemine uyarlariz
// const bilgi=prompt("Insan nesnesinden hangisini gormek istersin-ad,soyad,yas,...-");
// console.log(insan[bilgi]);

//objeye key be valueler ekleme

insan.konum="Turkiye";
insan.email="insan@hotmail.com";
insan["DogumTarihi"]=1991;

console.log(insan);

//**NESNE METHOD */

const kisi ={
    ad:"Merve",
    soyad:"Kaplan",
    DogumTarihi:1990,
    meslek:"Developer",
    tool:"React",
    ehliyet:true,
    yasHesapla:function () {//bugunun yilini al=>Date().getFullYear()
        return new Date().getFullYear()-this.DogumTarihi;
    },
    ozet:function () {
        return `${this.ad} ${this.soyad} ${this.yasHesapla()} yasindadir`;
    }
}
console.log(kisi);

console.log(kisi.yasHesapla());

console.log(kisi.ozet());

//Nesne Object Iterasyon ornekleri

const people =[
    {
       ad:"hakan",
    soyad:"inal",
    meslek:"developer",
    yas: 41
    }
    ,
    {
        ad:"said",
    soyad:"cin",
    meslek:"tester",
    yas: 37
     }
     ,
     {
        ad:"kublay",
    soyad:"tuncel",
    meslek:"team lead",
    yas: 33,
     }
     ,
     {
        ad:"osman",
    soyad:"turker",
    meslek:"grafiker",
    yas: 29
     }
     ,
     {
        ad:"huseyin",
    soyad:"harran",
    meslek:"developer",
    yas: 32
     }
        
];
console.log(people);

//or1: people dizisindeki kisilerin mesleklerini konsolda yazdirin
people.forEach((x) =>console.log(x.meslek));

//or2: People dizindeli tum kisilerin yaslarini 1 artirarak yazdiriniz
people.map((x)=>x.yas+1).forEach((x)=>console.log(x));

//or3: yasi 35 e esit veya kucuk olanlarin adlarini yazdirin
people.filter((x)=>x.yas<=35).forEach((x)=>console.log(x.ad));  
 
//or4: People dizisindeki kisilerin isimlerini buyuk harf olarak alan , 
//yaslarini 5 arttiran ve soyadinin ilk iki harfini fonk yazdiriniz
people.map((x)=>{
    return{
    ad:x.ad.toUpperCase(),
    yas:x.yas+5,
    soyad:x.soyad.slice(0,2)//0 ile 2 arasi 2 dahil degil.0 ve 1. index
    
    }
    
}).forEach((x)=>console.log(x));

//or5: meslegi developer olanlarin isimleri buyuk harf ile ve yaslarini yazdirin(isterseniz diziye atayip yazdirin)

const yeni =people.filter((x)=> x.meslek=="developer").map((x)=>
{
    return{
        ad:x.ad.toUpperCase(),
        yas:x.yas,
    }
});
console.log(yeni);



















