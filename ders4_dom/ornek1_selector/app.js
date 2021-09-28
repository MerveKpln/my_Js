//**GETELEMENTID */

const paragraf=document.getElementById("para").style;
paragraf.backgroundColor="black";
paragraf.color= "white";
paragraf.fontSize="20px";

const button= document.getElementById("btn");
button.style.width= "100px";
button.style.color="red";
button.style.fontSize="18px";
button.textContent="ARA" //textContent =taglerin icerigindeki yaziyi degistirmke istersek


//**GETELEMENTBYTAGNAME */
//bu kullani tercih edilmiyor

const resim= document.getElementsByTagName("img");

resim[0].style.width="300px";
resim[0].style.height="300px";
resim[1].style.border="1px solid red";


//**GETELEMENTBYCLASSNAME */

const baslik =document.getElementsByClassName("h1");

baslik[0].style.textAlign= "center";


//**QUERYSELECTOR */
//!EN COK KULLANILAN CAGIRMA YOLU
//class da id de selector
//class nokta ,id # ile cagirlir
document.querySelector(".arama").textContent="DOM SELECTOR KAVRAMI 🤙";

document.querySelector(".h1").style.color="white";
document.querySelector("#govde").style.backgroundImage="linear-gradient(black,blue,pink";



//**EVENT */
//(ONMOUSEOVER,ONMOUSEOUT: farenin ustune gelince ayrilinca)

const h =document.querySelector(".h1");
h.onmouseover= function(){
    h.style.color="red";
    h.style.backgroundColor="white";

}
h.onmouseout= function(){
    h.style.color="purple";
    h.style.backgroundColor="gray";
}

//1. resme tikladigimizda img ler yer degistirsin

const resim1= document.querySelector(".bir")//ilk remin class adi
resim1.onclick=function(){
    resim1.src="./img/logo2.png";
    document.querySelector(".iki").src="./img/js_logo.png";
    
}