const { Router } = require('express');

const { estaAutenticado } = require('../middlewares/validar-autenticacion');

const { validarCampos, validarJWT, esAdminRole, tieneRole } = require('../middlewares')

const { verPerfil, editarPerfil } = require('../controllers/perfil')

const { armarMiProyecto, verMisProyectos } = require('../controllers/proyectos')
const { verProductos, peticionesPostDeAdministracion } = require('../controllers/productos')

const router = Router();

const passport = require('passport');



// ###################
// HOME
// ###################
router.get('/', (req, res) => {
	res.render('home', {
		titulo: ''
	})
});



// ###################
// Armar mi proyecto
// ###################
/*router.get('/armar_mi_proyecto',verMisProyectos);*/
router.get('/armar_mi_proyecto',(req, res) => {
	res.render('armar_mi_proyecto', {
		titulo: '- Armar mi proyecto'
	})
});
/*router.get('/armar_mi_proyecto/:msg?', (req, res) => {
	res.render('armar_mi_proyecto', { miMensaje: req.params.msg })
});*/
router.post('/armar_mi_proyecto', armarMiProyecto);



// ###################
// QUIENES SOMOS
// ###################
router.get('/quienes_somos', (req, res) => {
	res.render('quienes_somos', {
		titulo: '- ¿Quiénes somos?'
	})
});



// ###################
// PERFIL
// ###################
router.get('/perfil', [estaAutenticado], verPerfil);
/*router.get('/perfil', [estaAutenticado], (req, res) => {
	res.render('perfil', {
	miVariable: 'Archivo de Rutas',
	miOtraVariable:verPerfil
    })
});*/

router.put('/editar_perfil/:id', [
	validarJWT,
	estaAutenticado,
	/*esAdminRole,
	check('id', 'No es un ID válido').isMongoId(),
	check('id').custom(existeProductoPorId),
	check('nombre', 'El nombre es obligatorio').not().isEmpty(),
	check('categoria', 'La categoria no es un ID válido').isMongoId(),
	check('categoria').custom(existeCategoriaPorId),
	check('precio', 'El precio es obligatorio').not().isEmpty(),
	check('precio', 'El precio debe ser un valor numerico.').isNumeric(),*/
	validarCampos
], editarPerfil)



// ###########################
// TODO LO QUE TENGO QUE SABER
// ###########################
router.get('/todo_lo_que_tengo_que_saber', (req, res) => {
	res.render('todo_lo_que_tengo_que_saber', {
		titulo: '- Todo lo que tengo que saber'
	})
});



// ###################
// COMO TRABAJAMOS
// ###################
router.get('/como_trabajamos', (req, res) => {
	res.render('como_trabajamos', {
		titulo: '- ¿Cómo trabajamos?'
	})
});



// ###################
// BLOG
// ###################
/*router.get('/blog', (req, res) => {
	res.render('blog', {
		titulo: '- Blog'
	})
});*/



// ###################
// administracion
// ###################
router.get('/administracion', [estaAutenticado], verProductos);

router.post('/administracion', [estaAutenticado], peticionesPostDeAdministracion); // controlers/productos.js



// ###################
// api test
// ###################
router.get('/api_test', [estaAutenticado], (req, res) => {
	res.render('api_test', {
		titulo: '- Api test'
	})
});


/*var
router.get('*', (req, res) => {
	res.sendFile(__dirname+'/static/templates/404.html')
})
*/



// ============
// registro de usuario
// ============
/*router.get('/registrarse', (req, res, next) => {
	res.render('registrarse');
});


router.post('/registrarse', passport.authenticate('local-signup', {
	successRedirect: '/perfil',
	failureRedirect: '/registrarse',
	passReqToCallback: true
}));*/
//===================================
//desactive estas dos rutas para evitar vulnerabilidades
//===================================



// ============
// login
// ============
router.get('/iniciar_sesion', (req, res) => {
	res.render('iniciar_sesion', {
		titulo: '- Iniciar sesión'
	})
});

/*router.get('/iniciar_sesion', (req, res, next)=>{
    res.render('iniciar_sesion');
});*/


router.post('/iniciar_sesion', passport.authenticate('local-signin', {
	successRedirect: '/perfil',
	failureRedirect: '/iniciar_sesion',
	passReqToCallback: true
}));



// ============
// carrar sesion
// ============
router.get('/cerrar_sesion', (req, res, next) => {
	req.logout();
	res.redirect('/');
});





// ================
// ==== EXPORTS ====
// ================
module.exports = router;