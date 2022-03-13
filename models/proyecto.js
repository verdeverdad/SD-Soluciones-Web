const { Schema, model } = require('mongoose');

const ProyectoSchema = Schema({

        descripcion: {
                type:String,
                //required:[true, 'El nombre es obligatorio']
        },

        //TODO vvvvvv
        
        categoria: {
                type:String,
                //required:[true, 'El password es obligatoria']
        },
        fecha: {
                type:String
        },
        usuario: {
                type:Schema.Types.ObjectId,
                ref:'Usuario',
                
        },
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