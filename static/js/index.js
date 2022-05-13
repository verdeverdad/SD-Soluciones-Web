$(function () {
    $('.carousel').carousel({interval: 4000});

        $('#mensaje_de_confirmacion').fadeOut(15000);

        $('.mensaje_informativo').fadeOut(15000);
        
    });


    function modal_armar_mi_proyecto(){
        //console.log("modal_armar_mi_proyecto");
        document.getElementById("btn-enviar").style.display = "block"; 

        let que_proyecto_quiero = document.getElementById("que_proyecto_quiero").value;
        let punto_de_partida = document.getElementById("punto_de_partida").value;
        let crear_un_mapa_del_sitio = document.getElementById("crear_un_mapa_del_sitio").value;
        let elige_las_palabras_clave = document.getElementById("elige_las_palabras_clave").value;
        let crea_los_contenidos = document.getElementById("crea_los_contenidos").value;
        let detalles_finales = document.getElementById("detalles_finales").value;
        let nombre = document.getElementById("nombre").value;
        let correo = document.getElementById("correo").value;
        let telefono = document.getElementById("telefono").value;

        if (nombre == "") {
            nombre = "<span class='text-danger'>Debe ingresar un nombre.</span>";
            document.getElementById("btn-enviar").style.display = "none"; 
        }
        if (correo == "") {
            correo = "<span class='text-danger'>Debe ingresar un correo electrónico.</span>";
            document.getElementById("btn-enviar").style.display = "none"; 
        }
        if (telefono == "") {
            telefono = "<span class='text-danger'>Debe ingresar un teléfono.</span>";
            document.getElementById("btn-enviar").style.display = "none"; 
        }

        document.getElementById("que_proyecto_quiero_modal").innerHTML = "<strong>Que proyecto quiero:</strong>  " + que_proyecto_quiero;
        document.getElementById("punto_de_partida_modal").innerHTML = "<strong>Punto de partida:</strong>  " + punto_de_partida;
        document.getElementById("crear_un_mapa_del_sitio_modal").innerHTML = "<strong>Crear un mapa del sitio:</strong>  " + crear_un_mapa_del_sitio;
        document.getElementById("elige_las_palabras_clave_modal").innerHTML = "<strong>Elige las palabras clave:</strong>  " + elige_las_palabras_clave;
        document.getElementById("crea_los_contenidos_modal").innerHTML = "<strong>Crea los contenidos:</strong>  " + crea_los_contenidos;
        document.getElementById("detalles_finales_modal").innerHTML = "<strong>Detalles finales:</strong>  " + detalles_finales;
        document.getElementById("nombre_modal").innerHTML = nombre;
        document.getElementById("correo_modal").innerHTML = correo;
        document.getElementById("telefono_modal").innerHTML = telefono;


    }
    
   