const {response, request} = require('express');
const {Categoria} = require('../models');


// ==================
// GET /categorias
// ==================
// obtenerCategorias - paginado - total- populate
const obtenerCategorias = async (req = request, res = response) => {

        const {limite= 5, desde = 0} = req.query;

        const [total, categorias] = await Promise.all( [
                Categoria.countDocuments({ estado:true }),
                Categoria.find({ estado:true })
                        .populate('usuario', 'nombre')
                        .skip( Number(desde) )
                        .limit( Number(limite) )
        ]);

        res.status(200).json({
                total,
                categorias
        });
}



// ==================
// GET /categoria by id
// ==================
// obtenerCategoria - populate {}
const obtenerCategoria = async (req = request, res = response) => {
        const id = req.params.id;

        const categoria = await Categoria.findById(id).populate('usuario', 'nombre'); 
        //const categoria = await Categoria.findOne({id, estado:true}).populate('usuario'); 

        if(!categoria){
                return res.status(400).json({
                        msg:'La categoria no existe o su estado es false.'
                })
        }
        if(!categoria.estado){
                return res.status(400).json({
                        msg:'La categoria tiene estado en false.'
                })
        }

        res.status(200).json(categoria);


}



// ==================
// POST /categoria
// ==================
const crearCategoria = async (req, res = response) => {

        const nombre = req.body.nombre.toUpperCase();

        const categoriaDB = await Categoria.findOne({nombre})

        if(categoriaDB){
                return res.status(400).json({
                        msg:`La categoria ${categoriaDB.nombre}, ya existe.`
                })
        }


        // Generar la data a guardar
        const data = {
                nombre,
                usuario:req.usuario._id,

        }


        const categoria = new Categoria(data);

        // Guardar en DB
        await categoria.save()

        res.status(201).json({msg:"Categoria creada correctamente.", categoria});

}



// ==================
// PUT /categoria by
// ==================
// actualizar categoria
const actualizarCategoria = async (req, res = response) => {

        // obtengo el id que quiero modificar
        const id = req.params.id;

        //extraigo los valores que quiero establecer
        const nombre = req.body.nombre.toUpperCase();
        const estado = req.body.estado;
        const usuario = req.usuario._id;


        //busco la categoria que voy a modificar
        //const categoria = await Categoria.findById(id);//.populate('usuario'); 
        const categoria = await Categoria.findByIdAndUpdate(id, {nombre, usuario}, {new:true});

        //modifico el nombre y el usuario
        //categoria.nombre = nombre;
        //categoria.usuario = usuario;
        //una vez modificada , la guardo en la base de datos
        //categoria.save()
        
        
        //console.log(nombre)
        res.status(200).json({msg:"Categoria editada correctamente.", categoria});

}



// ==================
// DELETE /categoria by
// ==================
// borrar categoria - estado :false
const borrarCategoria = async (req, res = response) => {

        // obtengo el id que quiero borrar
        const id = req.params.id;

        //busco la categoria que voy a modificar
        //const categoria = await Categoria.findById(id);//.populate('usuario'); 
        const categoria = await Categoria.findByIdAndUpdate(id, {estado:false}, {new:true});

        //modifico el nombre
        //categoria.estado = false;
        //una vez modificada , la guardo en la base de datos
        //categoria.save()


        res.status(500).json({msg:"Categoria borrada correctamente.", categoria});
}


module.exports = {
        obtenerCategorias,
        obtenerCategoria,
        crearCategoria,
        actualizarCategoria,
        borrarCategoria
}