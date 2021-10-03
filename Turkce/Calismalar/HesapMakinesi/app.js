function hesapEt(result) {
    if (form.displayResult.value==0 ) {
        form.displayResult.value= result;
    }
    else
    form.displayResult.value+= result;
};
document.querySelector(".bos").onclick=function () {
    document.querySelector(".ekranBorder").value="";
}