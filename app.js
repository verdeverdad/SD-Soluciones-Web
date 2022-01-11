
const express = require("express");
const hbs = require('hbs');
const app = express();
const port =  3000;
//slkndfsjdglskdgn
//const port = 3000


// HANDLERBARS
app.set('view engine', 'hbs');
// los parciales son los fragmentos de codigo html incrustados en otros archivos html usando  la sintacsis {{> mi_parcial}}
hbs.registerPartials(__dirname + '/views/parciales', function (err) {});


// Servir contenido estatico
app.use(express.static(__dirname + "/static"));

// HOME
app.get('/', (req, res) => {
	res.render('home', {
        nombre:'Rafael',
        //titulo:'Soluciones Web'
        titulo: 'SD-Soluciones en desarrollo'
    })
});


// ARMAR MI PROYECTO
app.get('/armar_mi_proyecto', (req, res) => {
	res.render('armar_mi_proyecto', {
        //titulo:'Soluciones Web'
        titulo: 'SD-Soluciones en desarrollo'
    })
});


// QUIENES SOMOS
app.get('/quienes_somos', (req, res) => {
	res.render('quienes_somos', {
        //titulo:'Soluciones Web'
        titulo: 'SD-Soluciones en desarrollo'
    })
});


// PERFIL
app.get('/perfil', (req, res) => {
	res.render('perfil', {
        //titulo:'Soluciones Web'
        titulo: 'SD-Soluciones en desarrollo'
    })
});


// TODO LO QUE TENGO QUE SABER
app.get('/todo_lo_que_tengo_que_saber', (req, res) => {
	res.render('todo_lo_que_tengo_que_saber', {
        //titulo:'Soluciones Web'
        titulo: 'SD-Soluciones en desarrollo'
    })
});


/*app.get('/quienes_somos', (req, res) => {
	res.sendFile(__dirname+'/static/Quienes somos.html')
})*/

app.get('*', (req, res) => {
	res.sendFile(__dirname+'/static/404.html')
})




app.listen(port, ()=>{
    console.log("Escuchando a http://localhost:" + port)
});

