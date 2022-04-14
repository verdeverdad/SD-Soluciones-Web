const {response, request} = require('express');

const jwt = require('jsonwebtoken');

const Usuario = require('../models/usuario');



const verPerfil = (req , res) => {

        //const {limite= 5, desde = 0} = req.query;
        
        /*
        const usuarios = await Usuario.find({ estado:true })
                .skip( Number(desde) )
                .limit( Number(limite) );

        const total = await Usuario.countDocuments({ estado:true });
        */

        /*const [total, usuarios] = await Promise.all( [
                Usuario.countDocuments({ estado:true }),
                Usuario.find({ estado:true })
                        .skip( Number(desde) )
                        .limit( Number(limite) )
        ]);*/

        /*res.json({
                total,
                usuarios
        });*/

        res.render('perfil', {
                //titulo:'Soluciones Web'
                miOtraVariable: 'Aca estoy!!!!',
                laRec: req
            })

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
        console.log('el usuario._id es: ', id)

        if(id === uid){
                
                //extraigo los valores que quiero establecer
                const {nombre, apellido, contraseña, ubicacion} = req.body;
        
                const data = {
                        nombre, 
                        apellido, 
                        contraseña, 
                        ubicacion
                };
                console.log('la data es: ',data);

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
                mensaje:'sotopu aca estoooooooy!!!'
        });

       

}






module.exports = {
        verPerfil,
        editarPerfil
}