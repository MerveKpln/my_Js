/// bilg 1-20 arasinda bir sayi tut
let ratsgeleSayi= Math.floor(Math.random()*20+1);

let puanPc =10;
let rekorPc =0;

//her kontrol et butonuna tiklandiginda calistirdim
document.querySelector(".kontrol").onclick = function(){
  const tahmin= document.querySelector(".tahmin").value ;
    //tahmin dogruysa
    if (tahmin==ratsgeleSayi) {
        document.querySelector("body").style.backgroundColor="green";
        document.querySelector(".question").textContent=ratsgeleSayi;
       document.querySelector(".mesaj").textContent=" 🥳Tebrikler bildiniz";
       //rekoru guncelle
        if (puanPc>rekorPc) {
            rekorPc=puanPc;
            document.querySelector(".rekorSkor").textContent=puanPc;
        }
    }
    //tahmin yanlissa
    else{
        if (puanPc>1) {
            puanPc--;
            let mesaj= document.querySelector(".mesaj");
           tahmin<ratsgeleSayi ? (mesaj.textContent="⬆️Arttir") : (mesaj.textContent="⬇️Azalt");
            document.querySelector(".skor").textContent=puanPc;
        }
        else{
            let mesaj= document.querySelector(".mesaj");
            mesaj.textContent="Oyunu kaybettiniz";
            document.querySelector(".skor").textContent=0;
            document.querySelector("body").style.backgroundColor="red";
        }
        

    }
    
}
//tekrar butona basildiginda baslangic degerleri yuklensin
    document.querySelector("tekrar").onclick=()=>{
        ratsgeleSayi= Math.floor(Math.random()*20+1);

        document.querySelector(".body").style.backgroundColor="#2d3436";
        document.querySelector(".question").textContent="?";
        document.querySelector(".mesaj").textContent="Tahmine baslaniyor"
    }