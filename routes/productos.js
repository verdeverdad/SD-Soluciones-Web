const { Router } = require('express');
const { check } = require('express-validator');


const {validarCampos,validarJWT, esAdminRole, tieneRole} = require('../middlewares')
const { existeCategoriaPorId, existeProductoPorId  } = require('../helpers/db-validators');


const {
        obtenerProductos, 
        obtenerProducto, 
        crearProducto, 
        actualizarProducto, 
        borrarProducto} = require('../controllers/productos')
//const {obtenerCategorias, obtenerCategoria,crearCategoria, actualizarCategoria, borrarCategoria} = require('../controllers/categorias')

const router = Router();



// ==================
// GET 
// ==================
// Obtener todos los productos - acceso publico
router.get('/', [
        //validarJWT,
        //validarCampos
], obtenerProductos)





// ==================
// GET - id
// ==================
// Obtener un producto - acceso publico
router.get('/:id', [
        //validarJWT,
        check('id', 'No es un ID válido').isMongoId(),
        check('id').custom(existeProductoPorId),
        validarCampos
], obtenerProducto)




// ==================
// POST
// ==================
// Crear una categoria - privado - cualquier persona con un token valido
router.post('/', [
        validarJWT,
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('categoria', 'La categoria no es un ID válido').isMongoId(),
        check('categoria').custom(existeCategoriaPorId),

        //check('categoria', 'La categoria es obligatoria').not().isEmpty(),

        check('precio', 'El precio es obligatorio').not().isEmpty(),
        check('precio', 'El precio debe ser un valor numerico.').isNumeric(),
        validarCampos
], crearProducto)


// ==================
// PUT
// ==================
// Actualizar una producto - privado - cualquier persona con un token valido
router.put('/:id', [
        validarJWT,
        esAdminRole,
        check('id', 'No es un ID válido').isMongoId(),
        check('id').custom(existeProductoPorId),
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('categoria', 'La categoria no es un ID válido').isMongoId(),
        check('categoria').custom(existeCategoriaPorId),
        check('precio', 'El precio es obligatorio').not().isEmpty(),
        check('precio', 'El precio debe ser un valor numerico.').isNumeric(),
        validarCampos
], actualizarProducto)



// Borrar una categoria - solo ADMIN_ROLE
router.delete('/:id', [
        validarJWT,
        esAdminRole,
        //tieneRole('ADMIN_ROLE'),
        check('id', 'No es un ID válido').isMongoId(),
        check('id').custom(existeProductoPorId),
        validarCampos
], borrarProducto)



// ================
// ==== EXPORTS ====
// ================
module.exports = router;