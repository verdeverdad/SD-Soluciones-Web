const {response, request} = require('express');
const {Producto, Categoria} = require('../models');


// ==================
// GET /Productos
// ==================
// obtenerProductos - paginado - total- populate
const obtenerProductos = async (req = request, res = response) => {

        const {limite= 5, desde = 0} = req.query;
        const query = {estado:true};

        const [total, productos] = await Promise.all( [
                Producto.countDocuments(query),
                Producto.find(query)
                        .populate('usuario', 'nombre')
                        .populate('categoria', 'nombre')
                        .skip( Number(desde) )
                        .limit( Number(limite) )
        ]);

        res.status(200).json({
                total,
                productos
        });

}



// ==================
// GET id Producto
// ==================
// obtenerProducto - paginado - total- populate
const obtenerProducto = async (req = request, res = response) => {
        
        const id = req.params.id;
        
        const producto = await Producto.findById(id).populate('usuario', 'nombre').populate('categoria', 'nombre'); 

        if(!producto){
                return res.status(400).json({
                        msg:'El producto no existe.'
                })
        }
        if(!producto.estado){
                return res.status(400).json({
                        msg:'El producto tiene estado en false.'
                })
        }

        res.status(200).json(producto);

}



// ==================
// POST
// ==================
// crearProducto 
const crearProducto = async (req = request, res = response) => {

        const {nombre, precio, descripcion, categoria} = req.body;
        //const categoria = req.body.categoria;

        const objetoProducto = await Producto.findOne({nombre});
        //const objetoCategoria = await Categoria.findOne({id:categoria});

        if(objetoProducto){
                return res.status(400).json({
                        msg:`La producto ${nombre}, ya existe.`
                })
        }


        // Generar la data a guardar
        const data = {
                nombre,
                estado:true,
                usuario:req.usuario._id,
                precio,
                categoria,
                descripcion
        }


        const producto = new Producto(data);

        // Guardar en DB
        await producto.save();

        res.status(201).json({msg:"Producto creado correctamente.", producto});
                
}




// ==================
// PUT
// ==================
// actualizar producto
const actualizarProducto = async (req, res = response) => {

        // obtengo el id que quiero modificar
        const id = req.params.id;

        //extraigo los valores que quiero establecer
        const {nombre, estado, precio, categoria, descripcion, disponible} = req.body;
        const usuario = req.usuario._id;

        const data = {
                nombre, 
                estado,
                usuario, 
                precio, 
                categoria: categoria, 
                descripcion, 
                disponible
        };

        //busco la categoria que voy a modificar
        const producto = await Producto.findByIdAndUpdate(id, data, {new:true});
        
        //console.log(nombre)
        res.status(200).json({msg:"Producto editado correctamente.", producto});

}



// ==================
// DELETE 
// ==================
// borrar Producto - estado :false
const borrarProducto = async (req, res = response) => {

        // obtengo el id que quiero borrar
        const id = req.params.id;

        //busco el Producto que voy a modificar
        const producto = await Producto.findByIdAndUpdate(id, {estado:false}, {new:true});

        res.status(200).json({msg:"Producto borrado correctamente.", producto});
}





module.exports = {
        obtenerProductos,
        obtenerProducto,
        crearProducto,
        actualizarProducto,
        borrarProducto
}