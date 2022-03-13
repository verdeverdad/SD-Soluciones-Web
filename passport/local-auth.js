const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const Usuario = require('../models/usuario');

passport.serializeUser((usuario, done) => {
        done(null, usuario.id)
})

passport.deserializeUser(async (id, done) => {
        const user = await Usuario.findById(id)
        done(null, user)
})

passport.use('local-signup', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
}, async (req, email, password, done) => {

        const existeUsuario = await Usuario.findOne({ correo:email });

        if (existeUsuario) {
                return done(null, false, req.flash('signupMessage', 'El email ya ha sido registrado previamente.'))
        } else {
                const nuevoUsuario = new Usuario()

                nuevoUsuario.nombre = req.body.nombre;
                nuevoUsuario.correo = email;
                nuevoUsuario.password = nuevoUsuario.encryptPassword(password);
                nuevoUsuario.rol = 'USER_ROLE';
                await nuevoUsuario.save();

                done(null, nuevoUsuario)
        }

}));



passport.use('local-signin', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
}, async (req, email, password, done) => {

        const usuario = await Usuario.findOne({ correo: email });
        //console.log('*****busca email: ', email)
        //console.log(usuario)
        if (!usuario) {
                return done(null, false, req.flash('signinMessage', 'El usuario no esta registrado.'))
        }
        if (!usuario.comparePassword(password)) {
                return done(null, false, req.flash('signinMessage', 'Contraseña incorrecta.'))
        }

        done(null, usuario, req.flash('signinMessage', 'Bienvenido.'));

}));