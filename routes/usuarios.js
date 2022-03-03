const { Router } = require('express');
const { check } = require('express-validator');

//const {validarCampos} = require('../middlewares/validar-campos')
//const { validarJWT } = require('../middlewares/validar-jwt');
//const { esAdminRole, tieneRole } = require('../middlewares/validar-roles');
const {validarCampos,validarJWT, esAdminRole, tieneRole} = require('../middlewares')

const { esRoleValido, emailExiste, existeUsuarioPorId  } = require('../helpers/db-validators');

const { usuariosGet, usuariosPost, usuariosPut, usuariosPatch, usuariosDelete } = require('../controllers/usuarios');

const router = Router();



// ============
// ==== GET ====
// ============
router.get('/', usuariosGet);



// =============
// ==== POST ====
// =============
router.post('/', [
        check('nombre', 'El nombre es obligatorio.').not().isEmpty(),
        check('password', 'El password es obligatorio y debe contener mas de ocho caracteres.').isLength({min:8}),
        
        check('correo', 'El correo no es valido.').isEmail(),
        check('correo').custom(emailExiste),
        //check('rol', 'No es un rol válido.').isIn(['ADMIN_ROLE', 'USER_ROLE']),
        check('rol').custom(esRoleValido),
        validarCampos
], usuariosPost);



// ============
// ==== PUT ====
// ============
router.put('/:id', [
        check('id', 'No es un ID válido').isMongoId(),
        check('id').custom(existeUsuarioPorId),
        check('rol').custom(esRoleValido),
        validarCampos
], usuariosPut);



// ==============
// ==== PATCH ====
// ==============
router.patch('/', usuariosPatch);



// ===============
// ==== DELETE ====
// ===============
router.delete('/:id', [
        validarJWT,
        //esAdminRole,
        tieneRole('ADMIN_ROLE', 'VENTAS_ROLE'),
        check('id', 'No es un ID válido').isMongoId(),
        check('id').custom(existeUsuarioPorId),
        validarCampos
], usuariosDelete);




// ================
// ==== EXPORTS ====
// ================
module.exports = router;