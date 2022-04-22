const { Schema, model } = require('mongoose');

const ProyectoSchema = Schema({

        nombre: {
                type:String
        },
        correo: {
                type:String
        },
        telefono: {
                type:String
        },
        descripcion: {
                type:String,
                //required:[true, 'El nombre es obligatorio']
        },
        /*productos: [{
                type:Schema.Types.ObjectId,
                ref:'Producto',
        }],*/

        /*categoria: {
                type:String,
                //required:[true, 'El password es obligatoria']
        },*/
        fecha: {
                //type:Date //no utilizo el date porque guarda una hora distinta a la de uruguay
                type:String
        },
        /*usuario: {
                type:Schema.Types.ObjectId,
                ref:'Usuario',
                
        },*/
        estado: {
                type: Boolean,
                default: true
        }

});




ProyectoSchema.methods.toJSON = function() {
        const { __v, ...proyecto } = this.toObject();
        //proyecto.uid = _id;

        return proyecto;
}



module.exports = model('Proyectos', ProyectoSchema);