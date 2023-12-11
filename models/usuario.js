const { Schema, model } = require('mongoose')

const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Debe ingresar un nombre de usuario']
    },
    correo: {
        type: String,
        required: [true, 'Debe ingresar un correo de usuario por favor'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Contraseña es obligatoria']
    },
    img: { type: String },

    electricidad: { type: String },

    gas: { type: String },

    transporte: { type: String },

    estado: { type: Boolean, default: true }
})

UsuarioSchema.methods.toJSON = function () {
    const { __v, _id: id, password, ...usuario } = this.toObject()
    return { id, ...usuario }
}

module.exports = model('Usuario', UsuarioSchema)