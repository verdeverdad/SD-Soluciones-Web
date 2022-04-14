const {request,response} = require('express');
const jwt = require('jsonwebtoken');

const Usuario = require('../models/usuario');

const validarJWT = async (req = request, res = response, next) => {

        const token = req.header('x-token');

        if(!token){

                return res.status(401).json({
                        msg:'no hay token en la petición'
                })

        }


        try {
                //console.log('el token es: ', token)
                const {uid} = jwt.verify(token, process.env.SECRETORPRIVATEKEY)
                //console.log('el uid es: ', uid)
                const usuario = await Usuario.findById(uid);
                //console.log('el usuario es: ', usuario)
                if(!usuario){
                        return res.status(401).json({
                                msg:'Token no valido - usuario no existe en BD'
                        })
                }

                // verificar si el usuario esta activo
                if(!usuario.estado){
                        return res.status(401).json({
                                msg:'Token no valido - usuario con estado en false'
                        })
                }

                req.usuario = usuario;

                next();
        
        }catch(error){
                console.log(error);
                return res.status(401).json({
                        msg:'Token no valido'
                })
        }
 

}




module.exports = {
        validarJWT
}