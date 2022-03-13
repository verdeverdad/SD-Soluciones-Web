const { Router } = require('express');

const {estaAutenticado} = require('../middlewares/validar-autenticacion')

const {verPerfil} = require('../controllers/perfil')

const {armarMiProyecto} = require('../controllers/proyectos')
const {verProductos, peticionesPostDeAdministracion} = require('../controllers/productos')

const router = Router();

const passport = require('passport');


// HOME
router.get('/', (req, res) => {
	res.render('home', {
        nombre:'Rafael',
        //titulo:'Soluciones Web'
        titulo: 'SD-Soluciones en desarrollo'
    })
});


// ARMAR MI PROYECTO
router.get('/armar_mi_proyecto', (req, res) => {
	res.render('armar_mi_proyecto', {
        //titulo:'Soluciones Web'
        miMensaje: 'llegue por get'
    })
});

router.post('/armar_mi_proyecto', armarMiProyecto)



// QUIENES SOMOS
router.get('/quienes_somos', (req, res) => {
	res.render('quienes_somos', {
        //titulo:'Soluciones Web'
        titulo: 'SD-Soluciones en desarrollo'
    })
});


// PERFIL
router.get('/perfil',[estaAutenticado],verPerfil);
/*router.get('/perfil', [estaAutenticado], (req, res) => {
	res.render('perfil', {
        miVariable: 'Archivo de Rutas',
        miOtraVariable:verPerfil
    })
});*/


// TODO LO QUE TENGO QUE SABER
router.get('/todo_lo_que_tengo_que_saber', (req, res) => {
	res.render('todo_lo_que_tengo_que_saber', {
        //titulo:'Soluciones Web'
        titulo: 'SD-Soluciones en desarrollo'
    })
});


// COMO TRABAJAMOS
router.get('/como_trabajamos', (req, res) => {
	res.render('como_trabajamos', {
        //titulo:'Soluciones Web'
        titulo: 'SD-Soluciones en desarrollo'
    })
});


// BLOG
router.get('/blog', (req, res) => {
	res.render('blog', {
        //titulo:'Soluciones Web'
        titulo: 'SD-Soluciones en desarrollo'
    })
});


// administracion
router.get('/administracion', verProductos);

router.post('/administracion', peticionesPostDeAdministracion); // controlers/productos.js






// api test
router.get('/api_test', (req, res) => {
	res.render('api_test')
});


/*var
router.get('*', (req, res) => {
	res.sendFile(__dirname+'/static/templates/404.html')
})
*/






// ============
// registro de usuario
// ============
router.get('/registrarse', (req, res, next)=>{
    res.render('registrarse');
});


router.post('/registrarse', passport.authenticate('local-signup',{
    successRedirect: '/perfil', 
    failureRedirect: '/registrarse',
    passReqToCallback:true
}));



// ============
// login
// ============
router.get('/iniciar_sesion', (req, res) => {
	res.render('iniciar_sesion', {
        //titulo:'Soluciones Web'
        titulo: 'SD-Soluciones en desarrollo'
    })
});

/*router.get('/iniciar_sesion', (req, res, next)=>{
    res.render('iniciar_sesion');
});*/


router.post('/iniciar_sesion', passport.authenticate('local-signin',{
    successRedirect: '/perfil', 
    failureRedirect: '/iniciar_sesion',
    passReqToCallback:true
}));


// ============
// carrar sesion
// ============
router.get('/cerrar_sesion', (req, res, next)=>{
    req.logout();
    res.redirect('/');
});




// ================
// ==== EXPORTS ====
// ================
module.exports = router;