const {response, request} = require('express');
const bcryptjs = require('bcryptjs');

const Usuario = require('../models/usuario')

const {generarJWT} = require('../helpers/generar-jwt');


// =============
// ==== POST ====
// =============
const login = async(req, res = response) => {

        const {correo, password} = req.body

        try{
                const usuario = await Usuario.findOne({correo});


                // Verificar si el email existente
                if(!usuario){
                        return res.status(406).json({
                                status:'406 - Not Acceptable',
                                msg:'Usuario o password incorrecto - correo'
                        })
                }


                // Verificar si el usuario esta activo
                if(!usuario.estado){
                        return res.status(406).json({
                                status:'406 - Not Acceptable',
                                msg:'Usuario o password incorrecto - estado:false'
                        })
                }


                // Verificar la contraseña del
                const validPassword = bcryptjs.compareSync(password, usuario.password);
                if(!validPassword){
                        return res.status(406).json({
                                status:'406 - Not Acceptable',
                                msg:'Usuario o password incorrecto - password'
                        })
                }


                // Generar el JWT
                const token = await generarJWT(usuario.id);


                res.status(200).json({
                        msg: 'Login ok',
                        usuario,
                        token
                });

        }catch(error){
                console.log(error);
                return res.status(500).json({
                        msg: 'Algo malió sal.'
                });
        }

        
}




// ================
// ==== EXPORTS ====
// ================
module.exports = {
        login
}