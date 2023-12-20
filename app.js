if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
  }
  
  const DB_URI = process.env.DB_URI
  const PORT = process.env.PORT || 3000;



// para utilizar las variables de entorno que estan en el archivo .env
require('dotenv').config()

const Server = require('./models/server');

// toma del arcihvo .env el valor que queremos asignar al puerto 
//const port =  process.env.PORT;

//const express = require("express")
//const path = require("path")
//const hbs = require('hbs');
//const app = express()


// instancio el servidor 
const server = new Server();

// ejecuto el metodo listen()
server.listen();

// HANDLERBARS
//app.set('view engine', 'hbs');
// los parciales son los fragmentos de codigo html incrustados en otros archivos html usando  la sintacsis {{> mi_parcial}}
//hbs.registerPartials(__dirname + '/views/parciales', function (err) {});


// Servir contenido estatico
//app.use(express.static(__dirname + "/static"));


// HOME
/*app.get('/', (req, res) => {
	res.render('home', {
        nombre:'Rafael',
        //titulo:'Soluciones Web'
        titulo: 'SD-Soluciones en desarrollo'
    })
});*/


// ARMAR MI PROYECTO
/*app.get('/armar_mi_proyecto', (req, res) => {
	res.render('armar_mi_proyecto', {
        //titulo:'Soluciones Web'
        titulo: 'SD-Soluciones en desarrollo'
    })
});*/


// QUIENES SOMOS
/*app.get('/quienes_somos', (req, res) => {
	res.render('quienes_somos', {
        //titulo:'Soluciones Web'
        titulo: 'SD-Soluciones en desarrollo'
    })
});*/


// PERFIL
/*app.get('/perfil', (req, res) => {
	res.render('perfil', {
        //titulo:'Soluciones Web'
        titulo: 'SD-Soluciones en desarrollo'
    })
});*/


// TODO LO QUE TENGO QUE SABER
/*app.get('/todo_lo_que_tengo_que_saber', (req, res) => {
	res.render('todo_lo_que_tengo_que_saber', {
        //titulo:'Soluciones Web'
        titulo: 'SD-Soluciones en desarrollo'
    })
});*/


// COMO TRABAJAMOS
/*app.get('/como_trabajamos', (req, res) => {
	res.render('como_trabajamos', {
        //titulo:'Soluciones Web'
        titulo: 'SD-Soluciones en desarrollo'
    })
});
*/

// BLOG
/*app.get('/blog', (req, res) => {
	res.render('blog', {
        //titulo:'Soluciones Web'
        titulo: 'SD-Soluciones en desarrollo'
    })
});
*/

/*app.get('/quienes_somos', (req, res) => {
	res.sendFile(__dirname+'/static/Quienes somos.html')
})*/

/*app.get('*', (req, res) => {
	res.sendFile(__dirname+'/static/templates/404.html')
})*/



/*app.listen(port, () => {
    console.log("Escuchando a http://localhost:" + port)
});*/

