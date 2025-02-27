let imgbox = document.getElementById("imgbox");
let QrImage = document.getElementById("qrimage");
let Qrtext = document.getElementById("qrtext");

function GenerateQR(){
if(Qrtext.value.length > 0){
    QrImage.src ="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ Qrtext.value;
imgbox.classList.add("show-img");
}
else{
    Qrtext.classList.add('error');
    setTimeout(()=>{
          Qrtext.classList.remove('error');
        },1000)
}
}

    
