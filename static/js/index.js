$(function () {
    $('.carousel').carousel({interval: 4000});

        $('#mensaje_de_confirmacion').fadeOut(20000);

        $('.mensaje_informativo').fadeOut(20000);
        
    });


    function modal_armar_mi_proyecto(){
        //console.log("modal_armar_mi_proyecto");
        document.getElementById("btn-enviar").style.display = "block"; 

        let que_proyecto_quiero = document.getElementById("que_proyecto_quiero").value;
        let punto_de_partida = document.getElementById("punto_de_partida").value;
        let mapa_del_sitio = document.getElementById("mapa_del_sitio").value;
        let imagenes = document.getElementById("imagenes").value;
        let contenido = document.getElementById("contenido").value;
        let palabras_clave = document.getElementById("palabras_clave").value;
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
        document.getElementById("mapa_del_sitio_modal").innerHTML = "<strong>Mapa del sitio:</strong>  " + mapa_del_sitio;
        document.getElementById("imagenes_modal").innerHTML = "<strong>Imágenes:</strong>  " + imagenes;
        document.getElementById("contenido_modal").innerHTML = "<strong>Contenido:</strong>  " + contenido;
        document.getElementById("palabras_clave_modal").innerHTML = "<strong>Palabras clave:</strong>  " + palabras_clave;
        document.getElementById("detalles_finales_modal").innerHTML = "<strong>Detalles finales:</strong>  " + detalles_finales;
        document.getElementById("nombre_modal").innerHTML = nombre;
        document.getElementById("correo_modal").innerHTML = correo;
        document.getElementById("telefono_modal").innerHTML = telefono;

        

    }
    
   