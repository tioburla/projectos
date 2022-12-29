let qr = document.querySelector('.qr');
let qr_dialog = document.querySelector('.qr_dialog');
let elements = document.querySelector('.elements');
let exit = document.querySelector('.btn_exit');
let inserir = document.querySelector("input");
let qr_image = document.querySelector(".qrimage");
let divqr = document.querySelector(".divqr");

function page_qr() {
    qr_dialog.showModal();
    elements.style.opacity = 0.1;
}
function close_qr() {
    qr_dialog.close();
    elements.style.opacity = 1;
    if(inserir.value != ""){
        inserir.value = "";
        qr_image.style.opacity = 0;
        divqr.style.opacity = 0;
    }
}
function gerando() {
    if(inserir.value != "") {
        qr_image.style.opacity = 1.2;
        divqr.style.opacity = 1.2;
        qr_image.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inserir.value}`;
    }else{
        qr_image.style.opacity = 0;
        divqr.style.opacity = 0;
    }
};