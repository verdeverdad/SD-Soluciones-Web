$(function () {
    $('.carousel').carousel({
    interval: 4000})
    });

    

    //Configuraciones para el elemento que sube archivos
    var dzoptions = {
        url:"/",
        autoQueue: false
    };
    var myDropzone = new Dropzone("div#file-upload", dzoptions);  