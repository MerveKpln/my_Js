const night =document.querySelector(".fa-moon");
let donusum =document.querySelector(".switcher");
const body =document.querySelector(".darkmode");


document.querySelector(".fa-moon").onclick = function() {
   
    if (night === document.querySelector(".fa-moon")) {
       body.style.backgroundColor="white";
        body.style.color="black";
        
       
       night.className="fas fa-sun";

       night.style.color = "white";
       donusum.style.backgroundColor = "black";
    }
    else{
        body.style.backgroundColor="black";
        body.style.color="white";

        
        document.querySelector(".fa-sun").className= "fas fa-moon";
      
        night.style.color = "black";
        donusum.style.backgroundColor = "white";

       
    }
 
}

