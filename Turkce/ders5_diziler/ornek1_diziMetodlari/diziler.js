const yaslar=[5,10,28,42];
const isimler =["Hakan","Alaattin","Furkan","Dayanch",20,40,true,23.4,yaslar];

console.log(isimler);

console.log(isimler[3]);

console.log(isimler[3]="Sadi");
console.log(isimler);

//const degistirilemiyordu ama non-primitive`lerde(arrayerde)
//degistirilebiliyor.Dizi bir adres gosterir isimler gibi , o yuzden primitive den farklidir

isimler[isimler.length-2]