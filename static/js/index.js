$(function () {
    $('.carousel').carousel({interval: 4000});

        $('#mensaje_de_confirmacion').fadeOut(15000);

        $('.mensaje_informativo').fadeOut(15000);
        
    });


    function modal_armar_mi_proyecto(){
        //console.log("modal_armar_mi_proyecto");

        let que_proyecto_quiero = document.getElementById("que_proyecto_quiero").value;
        let punto_de_partida = document.getElementById("punto_de_partida").value;
        let crear_un_mapa_del_sitio = document.getElementById("crear_un_mapa_del_sitio").value;
        let elige_las_palabras_clave = document.getElementById("elige_las_palabras_clave").value;
        let crea_los_contenidos = document.getElementById("crea_los_contenidos").value;
        let detalles_finales = document.getElementById("detalles_finales").value;
        let nombre = document.getElementById("nombre").value;
        let correo = document.getElementById("correo").value;
        let telefono = document.getElementById("telefono").value;

        document.getElementById("que_proyecto_quiero_modal").innerHTML = "Que proyecto quiero: " + que_proyecto_quiero;
        document.getElementById("punto_de_partida_modal").innerHTML = "Punto de partida: " + punto_de_partida;
        document.getElementById("crear_un_mapa_del_sitio_modal").innerHTML = "Crear un mapa del sitio: " + crear_un_mapa_del_sitio;
        document.getElementById("elige_las_palabras_clave_modal").innerHTML = "Elige las palabras clave: " + elige_las_palabras_clave;
        document.getElementById("crea_los_contenidos_modal").innerHTML = "Crea los contenidos: " + crea_los_contenidos;
        document.getElementById("detalles_finales_modal").innerHTML = "Detalles finales: " + detalles_finales;
        document.getElementById("nombre_modal").innerHTML = " Tu nombre: " + nombre;
        document.getElementById("correo_modal").innerHTML = "Tu correo: " + correo;
        document.getElementById("telefono_modal").innerHTML = "Tu telefono: " + telefono;


    }
    
   