const Producto = require('../models/producto')
const Proyecto = require('../models/proyecto')


const verMisProyectos = async (req, res, done) => {

        const productos = await Producto.find({estado:true})
        
        if(req.user){
//TODO vvvvv
                const query = {usuario:req.user._id};

                const [total, proyectos] = await Promise.all( [
                        Proyecto.countDocuments(query),
                        Proyecto.find(query).populate('usuario', 'nombre').populate('productos', 'nombre')
                ]);

                //const proyectos = req.user._id;
                res.render('armar_mi_proyecto', {
                        total,
                        proyectos,
                        productos
                })
        }

        res.render('armar_mi_proyecto',{productos})
}



/* Llegada de datos por POST */
const armarMiProyecto = async (req, res, done) => {


        const descripcion = [
                'Que proyecto quiero: ' + req.body.que_proyecto_quiero,
                'Punto de partida: ' + req.body.punto_de_partida,
                'Mapa del sitio: ' + req.body.mapa_del_sitio,
                'Imagenes: ' + req.body.imagenes,
                'Contenido: ' + req.body.contenido,
                'Palabras clave: ' + req.body.palabras_clave,
                'Detalles finales: ' + req.body.detalles_finales
        ]

        //const {productosDelNuevoProyecto} = req.body;
        //console.log('VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV')
        //console.log(descripcion)
        
        /*let data =[]
        
        for(let i in productosDelNuevoProyecto){
                console.log(i)
                console.log(productosDelNuevoProyecto[i])
                data.push( await Producto.findOne({_id:productosDelNuevoProyecto[i]}))
        }*/
        
        /*console.log("data para el new Proyecto() vvvvvv")
        console.log(data)
*/
        // guardar el proyecto en la base de datos
        let nuevoProyecto = new Proyecto();
        
        nuevoProyecto.nombre = req.body.nombre;
        nuevoProyecto.correo = req.body.correo;
        nuevoProyecto.telefono = req.body.telefono;

        nuevoProyecto.descripcion = JSON.stringify(descripcion);
        
        //const fecha = new Date();
        nuevoProyecto.fecha = new Date().toString();
        
        //el campo usuario hace referencia al modelo de usuarios
        /*if(req.user){
                nuevoProyecto.usuario = req.user;
        }*/
        
        await nuevoProyecto.save();

        let confirmacion_de_proyecto_guardado = true;

        res.render('armar_mi_proyecto',{
                confirmacion_de_proyecto_guardado, 
                titulo: '- Armar mi proyecto - Confirmación, proyecto enviado.'
        });
        


}





module.exports = {
        verMisProyectos,
        armarMiProyecto
}