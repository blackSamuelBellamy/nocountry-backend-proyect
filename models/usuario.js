import { Schema, model } from 'mongoose'

const UserSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Debe ingresar un nombre de usuario']
    },
    email: {
        type: String,
        required: [true, 'Debe ingresar un correo de usuario por favor'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Contraseña es obligatoria']
    },
    estate: { type: Boolean, default: true },

    img: { type: String }

})

export default model('User', UserSchema)