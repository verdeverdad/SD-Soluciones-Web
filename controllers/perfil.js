const {response, request} = require('express');






const verPerfil = (req , res) => {

        //const {limite= 5, desde = 0} = req.query;
        
        /*
        const usuarios = await Usuario.find({ estado:true })
                .skip( Number(desde) )
                .limit( Number(limite) );

        const total = await Usuario.countDocuments({ estado:true });
        */

        /*const [total, usuarios] = await Promise.all( [
                Usuario.countDocuments({ estado:true }),
                Usuario.find({ estado:true })
                        .skip( Number(desde) )
                        .limit( Number(limite) )
        ]);*/

        /*res.json({
                total,
                usuarios
        });*/

        res.render('perfil', {
                //titulo:'Soluciones Web'
                miOtraVariable: 'Aca estoy!!!!',
                laRec: req
            })

}






module.exports = {
        verPerfil
}