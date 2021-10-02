var showListe =[];

//!json dosyasindan veri getirme asamalari

fetch("./tvShowYeni").then((cevap)=> cevap.json()).then((data)=>{
showListe=data;
showIzle(showListe);//method call
});
function showIzle(showListe) {
    var resim= document.querySelector(".liste");
    showListe.forEach((x) => {
        resim.innerHTML+= `<div class="card mb-3">
        <img class="card-img-top" src=${x.image.medium} alt="Card image cap">
        <div class="card-body">
          <h5 >${x.image._embedded.show.name}</h5>
          
        </div>
      </div>`;
    });

    
}