var showListe =[];

//!json dosyasindan veri getirme asamalari

fetch("./tvShowYeni.json").then((cevap)=> cevap.json()).then((data)=>{
showListe=data;
showIzle(showListe);//method call
});
function showIzle(showListe) {
    var resim= document.querySelector(".liste");
    showListe.forEach((x) => {
        resim.innerHTML+= `<div class="card col-md-3" >
        <img class="card-img-top" src=${x.image?x.image.medium :""} alt="">
        <div class="card-body">
          <h5 >${x._embedded.show.name}</h5>
          
          <a href="${x._embedded.show.url}" target="_blank" class="btn btn-danger">DETAYLAR</a>
        </div>
      </div>`;
    });

    
}