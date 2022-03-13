const Proyecto = require('../models/proyecto')



const armarMiProyecto = async (req, res, done) => {

        // TODO:resolver este array en menos lineas de codigo
        const proyecto = [
                que_proyecto_quiero = req.body.que_proyecto_quiero,
                punto_de_partida = req.body.punto_de_partida,
                crear_un_mapa_del_sitio = req.body.crear_un_mapa_del_sitio,
                elige_las_palabras_clave = req.body.elige_las_palabras_clave,
                crea_los_contenidos = req.body.crea_los_contenidos,
                detalles_finales = req.body.detalles_finales,
                precio_estimado = "el precio estimado es us$ 300"
        ]

        const descripcion = {
                que_proyecto_quiero: req.body.que_proyecto_quiero,
                punto_de_partida: req.body.punto_de_partida,
                crear_un_mapa_del_sitio: req.body.crear_un_mapa_del_sitio,
                elige_las_palabras_clave: req.body.elige_las_palabras_clave,
                crea_los_contenidos: req.body.crea_los_contenidos,
                detalles_finales: req.body.detalles_finales,
                precio_estimado: "el precio estimado es us$ 300"
        }


        // TODO
        // guardar el proyecto en la base de datos
        const objetoProyecto = new Proyecto();
        const fecha = new Date();

        objetoProyecto.descripcion = JSON.stringify(descripcion);
        objetoProyecto.fecha = fecha.toString();
        
        // TODO
        //el campo usuario deberia hacer referencia al modelo de usuarios
        objetoProyecto.usuario = req.user.correo;

        await objetoProyecto.save();


        res.render('armar_mi_proyecto', {
                proyecto,
                objetoProyecto
        })




}





module.exports = {
        armarMiProyecto
}