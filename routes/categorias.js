const { Router } = require('express');
const { check } = require('express-validator');

const {validarCampos,validarJWT, esAdminRole, tieneRole} = require('../middlewares')
const { existeCategoriaPorId  } = require('../helpers/db-validators');


const {obtenerCategorias, obtenerCategoria,crearCategoria, actualizarCategoria, borrarCategoria} = require('../controllers/categorias')

const router = Router();


/*
Raiz de las peticiones: {{url}}/api/categorias
*/

// Obtener todas las categorias - acceso publico
router.get('/', [
        //validarJWT,
        //validarCampos
], obtenerCategorias)



// Obtener una categoria - acceso publico
router.get('/:id', [
        //validarJWT,
        check('id', 'No es un ID válido').isMongoId(),
        check('id').custom(existeCategoriaPorId),
        validarCampos
], obtenerCategoria)



// Crear una categoria - privado - cualquier persona con un token valido
router.post('/', [
        validarJWT,
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        validarCampos
], crearCategoria)



// Actualizar una categoria - privado - cualquier persona con un token valido
router.put('/:id', [
        validarJWT,
        esAdminRole,
        check('id', 'No es un ID válido').isMongoId(),
        check('id').custom(existeCategoriaPorId),
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        validarCampos
], actualizarCategoria)



// Borrar una categoria - solo ADMIN_ROLE
router.delete('/:id', [
        validarJWT,
        esAdminRole,
        //tieneRole('ADMIN_ROLE'),
        check('id', 'No es un ID válido').isMongoId(),
        check('id').custom(existeCategoriaPorId),
        validarCampos
], borrarCategoria)



// ================
// ==== EXPORTS ====
// ================
module.exports = router;