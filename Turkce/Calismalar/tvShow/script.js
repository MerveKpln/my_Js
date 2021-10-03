var showListe =[];

//!json dosyasindan veri getirme asamalari

fetch("./tv-shows.json").then((cevap)=> cevap.json()).then((data)=>{
showListe=data;
showIzle(showListe);//method call
});

//method olusturma
function showIzle(showListe) {
   //!https://getbootstrap.com/docs/4.0/components/card/
    var list= document.querySelector(".liste");
    showListe.forEach((a) => {
        list.innerHTML+=`<div class="card col-md-3" >
        <img class="card-img-top" src=${a.show.image?a.show.image.medium :""} alt="">
        <div class="card-body">
          <h5 >${a.show.name}</h5>
          
          <a href="${a.show.url}" target="_blank" class="btn btn-danger">DETAYLAR</a>
        </div>
      </div>`;
    });
}