const { Schema, model } = require('mongoose');

const ProyectoSchema = Schema({

        nombre: {
                type:String,
                required:[true, 'El nombre es obligatorio']
        },

        //TODO vvvvvv
        descripcion: {
                type:String,
                required:[true, 'El correo es obligatorio'],
                unique: true
        },
        categoria: {
                type:String,
                required:[true, 'El password es obligatoria']
        },
        fecha: {
                type:String
        },
        usuario: {
                type:String,
                required:true
                //enum: ['ADMIN_ROLE', 'USER_ROLE']
        },
        estado: {
                type: Boolean,
                default: true
        },
        google: {
                type: Boolean,
                default: false
        }

});




UsuarioSchema.methods.toJSON = function() {
        const { __v, password, _id, ...usuario } = this.toObject();
        usuario.uid = _id;

        return usuario;
}



module.exports = model('Usuario', UsuarioSchema);