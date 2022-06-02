

const estaAutenticado = (req, res, next) => {
        if (req.isAuthenticated()) {
                return next();
        }
        //req.flash('signinMessage', 'Debe ingresar como usuario.')
        res.redirect('/iniciar_sesion');
        //res.render('iniciar_sesion', {mensaje_login:'Debe ingresar como usuario.', titulo: 'Desarrollo Soluciones Web - Iniciar sesión'});
}





module.exports = {
        estaAutenticado
}