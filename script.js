const kahramanlar=document.getElementById("kahramanlar");
const kahramanAd=document.getElementById("txtAd");
const kahramanGuc=document.getElementById("txtGuc");

kahramanlar.addEventListener("submit",karakteriKaydet);

function karakteriKaydet(e){
    e.preventDefault();

    let mesajIsim=kahramanAd.value;
    let mesajGuc=kahramanGuc.value;

    console.log(mesajIsim,mesajGuc);
}
