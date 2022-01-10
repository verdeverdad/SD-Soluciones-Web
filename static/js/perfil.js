let nameRegis = document.getElementById("usuario");
let nombre = document.getElementById("nombre");
let edad = document.getElementById("edad");
let email = document.getElementById("email");
let direccion = document.getElementById("direccion");
let nContacto = document.getElementById("numContacto");
let perfil = document.getElementById("miperfil");
let contraseña = document.getElementById("contraseña");
let contraseña2 = document.getElementById("contraseña2");



    document.addEventListener("DOMContentLoaded", function(){

        let nombreUsuario = JSON.parse(localStorage.getItem("nombreUsuario")) //traigo lo que quedo guardado en el set
        console.log("nombreLogueado...::"+nombreUsuario.username)
        nameRegis.innerHTML =  nombreUsuario.username
        perfil.innerHTML = nombreUsuario.username
        
        let nombreLogueado = JSON.parse(localStorage.getItem("nombre")) //traigo lo que quedo guardado en el set
        nombre.innerHTML =  nombreLogueado.nombre
    
        let edadLogueado = JSON.parse(localStorage.getItem("edad")) //traigo lo que quedo guardado en el set
        edad.innerHTML =  edadLogueado.edad
    
        let emailLogueado = JSON.parse(localStorage.getItem("email")) //traigo lo que quedo guardado en el set
        email.innerHTML = emailLogueado.email
    
        let direccionLogueado = JSON.parse(localStorage.getItem("direccion")) //traigo lo que quedo guardado en el set
        direccion.innerHTML =  direccionLogueado.direccion
    
        let nContactoLogueado = JSON.parse(localStorage.getItem("nContacto")) //traigo lo que quedo guardado en el set
        nContacto.innerHTML =  nContactoLogueado.nContacto
    
        let contraseñaLogueado = JSON.parse(localStorage.getItem("contraseña")) //traigo lo que quedo guardado en el set
        contraseña.innerHTML =  contraseñaLogueado.contraseña
    
        let cpasswordLogueado = JSON.parse(localStorage.getItem("cpassword")) //traigo lo que quedo guardado en el set
        cpassword.innerHTML =  cpasswordLogueado.cpassword
    
    
       
       
       
    });
    
    function modificar(){
        
        nameRegis.contentEditable = "true"
        nombre.contentEditable = "true";
        edad.contentEditable = "true"
        email.contentEditable = "true"
        direccion.contentEditable = "true"
        nContacto.contentEditable = "true"
        contraseña.contentEditable = "true"
        cpassword.contentEditable = "true"
        let bMod = document.getElementById("modificarP");
        bMod.style.display = "none"
    
        let bguardar = document.getElementById("bguardar");
        bguardar.style.display = "inline-block";
        let contr = document.getElementById("contr");
        contr.style.display = "inline-block";
        
    }
    
    function guardarModificados(){
        
        nameRegis.contentEditable = "false"
        nombre.contentEditable = "false"
        edad.contentEditable = "false"
        email.contentEditable = "false"
        direccion.contentEditable = "false"
        nContacto.contentEditable = "false"
        contraseña.contentEditable = "false"
        cpassword.contentEditable = "false"
    
        console.log(nombre.innerHTML)
        localStorage.setItem("nombre", JSON.stringify({ "nombre": nombre.innerHTML }));
        localStorage.setItem("email", JSON.stringify({ "email": email.innerHTML }));
        localStorage.setItem("direccion", JSON.stringify({ "direccion": direccion.innerHTML }));
        localStorage.setItem("edad", JSON.stringify({ "edad": edad.innerHTML }));
        localStorage.setItem("nContacto", JSON.stringify({ "nContacto": nContacto.innerHTML }));
        localStorage.setItem("nombreUsuario", JSON.stringify({ "username": username.innerHTML }));
        localStorage.setItem("contraseña", JSON.stringify({ "contraseña": contraseña.innerHTML }));
        localStorage.setItem("cpassword", JSON.stringify({ "cpassword": cpassword.innerHTML }));
        let usuarioLogueado = JSON.parse(localStorage.getItem("nombreUsuario")) //traigo lo que quedo guardado en el set
        perfil.innerHTML =  usuarioLogueado.username 
      
        let bguardar = document.getElementById("bguardar");
        bguardar.style.display = "none";
        let bMod = document.getElementById("modificarP");
        bMod.style.display = "inline-block"
        let contr = document.getElementById("contr");
       contr.style.display = "none"
    }
    function eliminarPerfil () {
        
        localStorage.clear();
        nameRegis.innerHTML = "";
        email.innerHTML = "";
        nombre.innerHTML = "";
        nContacto.innerHTML ="";
        direccion.innerHTML = "";
        edad.innerHTML = "";
        perfil.innerHTML = "Mi perfil";
        contraseña.innerHTML = "";
        cpassword.innerHTML = "";
    
        window.location = "index.html"
    }

