

const estaAutenticado = (req, res, next) => {
        if (req.isAuthenticated()) {
                return next();
        }
        req.flash('signinMessage', 'Debe ingresar como usuario.')
        res.redirect('/iniciar_sesion');
}





module.exports = {
        estaAutenticado
}