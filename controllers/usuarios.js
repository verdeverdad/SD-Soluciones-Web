const {response, request} = require('express');



const usuariosGet = (req = request, res = response) => {

        const {q, nombre='no name', apikey, page, limit} = req.query;

        res.json({
                msg: 'get api - controlador',
                q, 
                nombre,
                apikey,
                page,
                limit
        });
}


const usuariosPost = (req, res = response) => {

        const { nombre, edad} = req.body;

        res.status(201).json({
                msg: 'post api - controlador', 
                nombre,
                edad
        });
}


const usuariosPut =(req, res = response) => {

        const id = req.params.id;

        res.status(201).json({
                msg: 'put api - controlador',
                id
        });
}


const usuariosPatch = (req, res = response) => {
        res.json({
                msg: 'patch api - controlador'
        });
}


const usuariosDelete = (req, res = response) => {
        res.status(203).json({
                msg: 'delete API - controlador'
        });
}


module.exports = {
        usuariosGet,
        usuariosPost,
        usuariosPut,
        usuariosPatch,
        usuariosDelete
}