const { Schema, model } = require('mongoose');

const bcryptjs = require('bcryptjs');

const UsuarioSchema = Schema({

        nombre: {
                type:String,
                required:[true, 'El nombre es obligatorio']
        },
        apellido: {
                type:String
        },
        correo: {
                type:String,
                required:[true, 'El correo es obligatorio'],
                unique: true
        },
        password: {
                type:String,
                required:[true, 'El password es obligatoria']
        },
        ubicacion: {
                type:String
        },
        img: {
                type:String
        },
        rol: {
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

UsuarioSchema.methods.encryptPassword = (password)=>{
        return bcryptjs.hashSync(password, bcryptjs.genSaltSync(10))
}


UsuarioSchema.methods.comparePassword = function(password){
        return bcryptjs.compareSync(password, this.password)
}

module.exports = model('Usuario', UsuarioSchema);