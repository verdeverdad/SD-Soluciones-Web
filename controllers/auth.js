const {response, request} = require('express');
const bcryptjs = require('bcryptjs');

const Usuario = require('../models/usuario')

const {generarJWT} = require('../helpers/generar-jwt');
const {googleVerify} = require('../helpers/google-verify');


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




// =======================
// ==== Google Sign-in ====
// =======================
const googleSignIn = async(req, res = response)=>{

        const {id_token} = req.body;

        try{

                const {nombre, img, correo} = await googleVerify(id_token);
                //console.log({nombre, img, correo});
                
                let usuario = await Usuario.findOne({correo});
                
                if(!usuario){
                        
                        //se crea el usuario
                        const data = {
                                nombre,
                                correo,
                                password: ':P',
                                img,
                                google: true,
                                rol:'USER_ROLE'
                        };
                        
                        usuario = new Usuario(data);
                        //await usuario.save();
                        usuario.save();
                        //console.log('el usuario guardado es::: ',usuario)

                }

                // Si el usuario uya esta en la BD
                if (!usuario.estado){
                        return res.status(401).json({
                                msg:'Hable con el administrador, usuario bloqueado.'
                        });
                }


                 // Generar el JWT
                 const token = await generarJWT(usuario.id);




                res.json({
                        msg:'Todo ok!',
                        usuario,
                        token
                });
        
        }catch(error){
                res.status(400).json({
                        ok:false,
                        msg:'El token no se pudo verificar.'
                        
                })
        }

}






// ================
// ==== EXPORTS ====
// ================
module.exports = {
        login,
        googleSignIn
}