const { Router } = require('express');

const router = Router();




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
        titulo: 'SD-Soluciones en desarrollo'
    })
});


// QUIENES SOMOS
router.get('/quienes_somos', (req, res) => {
	res.render('quienes_somos', {
        //titulo:'Soluciones Web'
        titulo: 'SD-Soluciones en desarrollo'
    })
});


// PERFIL
router.get('/perfil', (req, res) => {
	res.render('perfil', {
        //titulo:'Soluciones Web'
        titulo: 'SD-Soluciones en desarrollo'
    })
});


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


/*router.get('/quienes_somos', (req, res) => {
	res.sendFile(__dirname+'/static/Quienes somos.html')
})*/


// login
router.get('/login', (req, res) => {
	res.render('login', {
        //titulo:'Soluciones Web'
        titulo: 'SD-Soluciones en desarrollo'
    })
});


// api test
router.get('/api_test', (req, res) => {
	res.render('api_test')
});


/*var
router.get('*', (req, res) => {
	res.sendFile(__dirname+'/static/templates/404.html')
})
*/




// ================
// ==== EXPORTS ====
// ================
module.exports = router;