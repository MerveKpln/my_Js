const maaslar =[4000,5000,3500,4200,2850,5000,7500];

const liste =document.querySelector(".liste-ul");


// }
for (let i in maaslar){
    liste.innerHTML=liste.innerHTML+`<li>${maaslar[i]}</li>`;
}
// for (let i of maaslar){
//     liste.innerHTML=liste.innerHTML+`<li>${i}</li>`;
// }


//ekle butonuna bastigimizda diziye ve listeye veri ekle
document.querySelector(".ekle").onclick = function() {
     const eklenen = document.querySelector(".liste");
     liste.innerHTML=liste.innerHTML+`<li>${eklenen.value }</li>`;
     maaslar.push(eklenen.value);
     eklenen.value="";
    aciklamaGuncelle(maaslar);
    }
//sil  butonuna bastigimizda diziye ve listedeki son elemani siler
document.querySelector(".sil").onclick = function() {
    if (maaslar.length==0) {
        alert("Silinecek oge kalmadi");
    }
    else{
        maaslar.pop();
        liste.removeChild(liste.lastElementChild);
        aciklamaGuncelle(maaslar);
    }
  
   }
   const aciklamaGuncelle=function(maaslar) {
    document.querySelector(".aciklama").innerHTML= `Maaslar : ${maaslar.join(" ")}`;

   }