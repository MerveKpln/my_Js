//ara butonuna tiklandiginda calan telefon ciksin ve zil calsin
let resim= document.querySelector(".resim");//resime ulastim
let ring = document.querySelector(".ses");//audio ya ulastim

document.querySelector(".on").onclick= function(){//ara butonuna ulastim
    resim.src="./assets/img/img.gif";// resim degistirdim
    ring.play();// sesi calsitirdim
}

//baglat butonuna basinca gif gelsin ses kesilsin

document.querySelector(".off").onclick= function () {//baglat butonunu cagirdik
    resim.src ="./assets/img/telbagla.gif";
    ring.pause();//sesi durdurduk
    
}


//konus butonuna nasinca yeni gif gelsin

document.querySelector(".speak").onclick= function(){
    resim.src="./assets/img/telfirlat.gif";
}

// const sonDiv = document.querySelector(".input-div");
// const h1= document.createElement("h1");
// const yazi = document.createTextNode("Programlama dilleri");
// h1.appendChild(yazi);
// sonDiv.after(h1);//input-div`in sonrasinda h1 ekliyoruz

//ekle butonuna basildiginda yeni bir li ekle
const list =document.querySelector(".liste");
document.querySelector(".ekle").onclick= function(){
 
    const satir =document.querySelector(".dil");
    list.innerHTML=list.innerHTML+`<li>${satir.value}</li>`;
    satir.value="";
}

// sil butonuna tiklandiginda li elemani silinsin
document.querySelector(".sil").onclick= function(){
    list.removeChild(list.lastElementChild);
    //listenin cocuklarindan listenin son cocugunu sildik
}


const p =document.querySelector(".forH1");
p.innerHTML= `<h1>${"Programlama Dilleri"}</h1>`;

//todo SEATTRIBUTE metodu ****************
//document.querySelector(".checkbox").setAttribute("type","checkbox");



// klavyeden bir tusa basildiginda buyusun kuculsun
document.querySelector(".textbox").onkeyup= function(){
    const checkbox = document.querySelector(".checkbox");
    const textbox = document.querySelector(".textbox");

    if (checkbox.checked){
        textbox.value= textbox.value.toUpperCase();
    }
    else{
        textbox.value= textbox.value.toLowerCase();
    }
}

//mouse ile resmin uzerine geldiginde kukresin
resim.onmouseover= function(){
    resim.src="./assets/img/aslan2.jpeg";
}

//2. yol
// resim.addEventListener("mouseout",function () {
//     resim.src="./assets/img/aslan2.jpeg";
// })

//mouse resimin uzerinden cekildiginde
resim.onmouseout= function(){
    resim.src="./assets/img/aslan1.jpeg";
}

//enter=13 delete=46
//onkeydown = klavyedeki tusa basip elinizi cektiginizde
document.querySelector(".dil").onkeydown=function(olay){
    if(olay.keyCode==13){//enter `i cagirdik
        document.querySelector(".ekle").onclick();
    }
    if (olay.keyCode==46) {//deleteyi cagirdik
        document.querySelector(".sil").onclick();
    }
}
