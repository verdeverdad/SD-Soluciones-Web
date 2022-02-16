const { Router } = require('express');
const { check } = require('express-validator');
const {validarCampos} = require('../middlewares/validar-campos')



const { login, googleSignIn } = require('../controllers/auth');



const router = Router();

router.post('/login',[
        check('correo', 'El correo es obligatorio.').isEmail(),
        check('password', 'El password es obligatorio y debe contener mas de ocho caracteres.').isLength({min:8}),
        
        validarCampos
], login );



router.post('/google',[
        check('id_token', 'El id_token es necesario.').not().isEmpty(),
        
        validarCampos
], googleSignIn );








// ================
// ==== EXPORTS ====
// ================
module.exports = router;