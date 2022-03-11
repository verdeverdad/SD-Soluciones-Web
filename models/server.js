const express = require("express");
const cors = require("cors");

const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');


const {dbConnection} = require("../database/config")

require('../passport/local-auth')

const morgan = require('morgan');

const hbs = require('hbs');

class Server {

        constructor(){
                this.app = express();
                this.port = process.env.PORT;


                this.paths = {
                        frontend:'/',
                        auth:'/api/auth',
                        categorias: '/api/categorias',
                        productos: '/api/productos',
                        usuarios: '/api/usuarios',
                }

                //this.usuariosPath = '/api/usuarios';
                //this.authPath = '/api/auth';


                // Conectar a la base de datos de datos
                this.conectarDB();

                // middleware
                this.middlewares();

                // Rutas
                this.routes();
        }

        async conectarDB(){
                await dbConnection();
        }

        
        middlewares(){
                // CORS
                this.app.use(cors());

                // Lectura y parseo del body
                this.app.use(express.json());
                //abilita la llegada de datos por formularios
                this.app.use(express.urlencoded({extended:false}))

                // configuracion del morgan()
                this.app.use(morgan('dev'));


                this.app.use(session({
                        secret:process.env.SECRETORPRIVATEKEY,
                        resave:false,
                        saveUninitialized:false
                }));
                this.app.use(flash()); //debe ir despues de session() y antes que el passport
                this.app.use(passport.initialize());
                this.app.use(passport.session());

                this.app.use((req,res,next)=>{
                        this.app.locals.signupMessage = req.flash('signupMessage');
                        this.app.locals.signinMessage = req.flash('signinMessage');

                        next();
                })

                // Directorio público
                //this.app.use(express.static("public"));
                /*hbs.registerPartials(__dirname + '/views/parciales', function (err) {});
                this.app.set('view engine', 'hbs');
                this.app.set("views", __dirname + "/views");
                this.app.use(express.static(__dirname + "/static"));*/

                // establece el motor de plantillas(en este caso 'hbs', pero podria ser 'ejs')
                this.app.set('view engine', 'hbs');
                hbs.registerPartials(__dirname + '/../views/parciales', function (err) {});
                this.app.set("views", __dirname + "/../views");
                this.app.use(express.static(__dirname + "/../static"));

        }


        routes(){
                this.app.use(this.paths.auth, require('../routes/auth'));
                this.app.use(this.paths.categorias, require('../routes/categorias'));
                this.app.use(this.paths.productos, require('../routes/productos'));
                this.app.use(this.paths.usuarios, require('../routes/usuarios'));
                this.app.use(this.paths.frontend, require('../routes/frontend'));
                //this.app.use(this.usuariosPath, require('../routes/usuarios'));

        }


        listen(){
                this.app.listen(this.port, () => {
                        console.log("Escuchando a http://localhost:" + this.port)
                    });
        }


}


module.exports = Server;