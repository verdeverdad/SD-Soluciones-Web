const {response, request} = require('express');
const bcryptjs = require('bcryptjs');

const Usuario = require('../models/usuario')



// ============
// ==== GET ====
// ============
const usuariosGet = async (req = request, res = response) => {

        const {limite= 5, desde = 0} = req.query;
        
        /*
        const usuarios = await Usuario.find({ estado:true })
                .skip( Number(desde) )
                .limit( Number(limite) );

        const total = await Usuario.countDocuments({ estado:true });
        */

        const [total, usuarios] = await Promise.all( [
                Usuario.countDocuments({ estado:true }),
                Usuario.find({ estado:true })
                        .skip( Number(desde) )
                        .limit( Number(limite) )
        ]);

        res.json({
                total,
                usuarios
        });
}



// =============
// ==== POST ====
// =============
const usuariosPost = async(req = request, res = response) => {

        


        const {nombre, correo, password, rol } = req.body;
        const usuario = new Usuario({nombre, correo, password, rol });
        
        // Verificar si el correo existente
        /*const existeEmail = await Usuario.findOne({correo});
        if(existeEmail){
                return res.status(406).json({
                        msg: 'Ese correo ya esta registrado'
                })
        }*/

        // Encriptar la contraseña
        const salt = bcryptjs.genSaltSync();
        usuario.password = bcryptjs.hashSync(password, salt)

        // Guardar en la base de datos
        await usuario.save();

        res.status(201).json({
                msg:'Usuario creado correctamente.',
                usuario
        });
}


// ============
// ==== PUT ====
// ============
const usuariosPut = async (req, res = response) => {

        const id = req.params.id;
        const {_id, password, google, correo, ...resto} = req.body;

        // TODO validar id contra la base de datos


        if(password){
                // Encriptar la contraseña
                const salt = bcryptjs.genSaltSync();
                resto.password = bcryptjs.hashSync(password, salt)

        }

        const usuario = await Usuario.findByIdAndUpdate(id, resto)



        res.status(200).json(usuario);
}



// ==============
// ==== PATCH ====
// ==============
const usuariosPatch = (req, res = response) => {
        res.json({
                msg: 'patch api - controlador'
        });
}



// ===============
// ==== DELETE ====
// ===============
const usuariosDelete = async (req, res = response) => {

        const id = req.params.id;
        //const {id} = req.params

        // borrado fisicamente
        //const usuario = await Usuario.findByIdAndDelete(id);

        // cambiar a inactivo el usuario
        const usuario =  await Usuario.findByIdAndUpdate(id, {estado:false});


        res.status(203).json({
                usuario
        });
}


module.exports = {
        usuariosGet,
        usuariosPost,
        usuariosPut,
        usuariosPatch,
        usuariosDelete
}