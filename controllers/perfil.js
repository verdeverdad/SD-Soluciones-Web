const {response, request} = require('express');

const jwt = require('jsonwebtoken');

const Usuario = require('../models/usuario');

const Proyecto = require('../models/proyecto')



const verPerfil = async (req , res) => {

        if(req.user){
                const query = {estado:true};

                const proyectos = await Proyecto.find(query);

                let array_de_proyectos = [];

                for(proyecto of proyectos){
                        datos = {
                                id: proyecto._id,
                                nombre: proyecto.nombre,
                                correo: proyecto.correo,
                                telefono: proyecto.telefono,
                                descripcion: JSON.parse(proyecto.descripcion),
                                fecha: proyecto.fecha.substr(0, 24),
                                estado: proyecto.estado
                        }
                        array_de_proyectos.push( datos);                                        
                }

                //console.log('VVVVVVVVV')
                //console.log(array_de_proyectos)

                //const proyectos = req.user._id;
                res.render('perfil', {
                        array_de_proyectos, 
                        titulo: '- Mi Perfil'
                })
        }

        /*res.render('perfil', {
                //titulo:'Soluciones Web'
                miOtraVariable: 'Aca estoy!!!!',
                laRec: req
            })*/

}


const editarPerfil = async (req , res) => {

        // TODO vvvvvvv
        // hacer la validacion del idMongo en las rutas y 
        //mandar de forma dinamica el token  al local storage o a las variables de sesion 
        //desde que se inicia la sesion
        
        // obtengo el id que quiero modificar
        const id = req.user._id.toString();
        const token = req.header('x-token');

        const {uid} = jwt.verify(token, process.env.SECRETORPRIVATEKEY)
        //console.log('el usuario._id es: ', id)

        if(id === uid){
                
                //extraigo los valores que quiero establecer
                const {nombre, apellido, contraseña, ubicacion} = req.body;
        
                const data = {
                        nombre, 
                        apellido, 
                        contraseña, 
                        ubicacion
                };
                // console.log('la data es: ',data);

                //busco la categoria que voy a modificar
                //const producto = await Producto.findByIdAndUpdate(id, data, {new:true});
                
                //console.log(nombre)
                //res.status(200).json({msg:"Producto editado correctamente.", producto});

        }else{

        }

        //extraigo los valores que quiero establecer
        //const {nombre, estado, precio, categoria, descripcion, disponible} = req.body;
        //const usuario = req.usuario._id;

        //console.log('usuario._id: ', usuario);

        res.json({
                mensaje:'aca estoooooooy!!!'
        });

       

}






module.exports = {
        verPerfil,
        editarPerfil
}