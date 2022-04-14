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
                // TODO resolver el calculo de precio
                precio_estimado: "el precio estimado es us$ 300"
        }

        const {productosDelNuevoProyecto} = req.body;
        console.log('VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV')
        console.log(productosDelNuevoProyecto)
        
        let data =[]
        
        for(let i in productosDelNuevoProyecto){
                console.log(i)
                console.log(productosDelNuevoProyecto[i])
                data.push( await Producto.findOne({_id:productosDelNuevoProyecto[i]}))
                
        }
        
        console.log("data para el new Proyecto() vvvvvv")
        console.log(data)

        // guardar el proyecto en la base de datos
        let objetoProyecto = new Proyecto();
        
        objetoProyecto.descripcion = JSON.stringify(descripcion);
        
        // TODO 
        // que el modelo de Proyectos guarde el objeto Date
        const fecha = new Date();
        objetoProyecto.fecha = fecha.toString();
        
        //el campo usuario hace referencia al modelo de usuarios
        if(req.user){
                objetoProyecto.usuario = req.user;
        }
        
        objetoProyecto.productos = data;

        await objetoProyecto.save();

        res.redirect('armar_mi_proyecto')
        /*res.render('armar_mi_proyecto', {
                total,
                proyectos,
                proyecto,
                objetoProyecto,
                productos
        })*/




}





module.exports = {
        verMisProyectos,
        armarMiProyecto
}