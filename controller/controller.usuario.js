const { request, response } = require('express')
const jwt = require('jsonwebtoken')
const bycript = require('bcryptjs')
const Usuario = require('../models/usuario')
const genToken = require('../helpers/jwt')
const transport = require('../helpers/emissions/calculator/transport')

const signUp = async (req = request, res = response) => {
    try {
        const { nombre, correo, password, transporte, ...rest } = req.body
        const salt = bycript.genSaltSync()
        let usuario
        const noNew = await Usuario.findOne({ correo, estado: false })
        if (noNew) {
            const update = {
                nombre,
                password: bycript.hashSync(password, salt),
                estado: true,
                transporte: transport(transporte),
                ...rest,
            }
            usuario = await Usuario.findByIdAndUpdate(noNew.id, update, { new: true })
        } else {
            usuario = new Usuario(
                {
                    nombre,
                    correo,
                    password,
                    transporte: transport(transporte),
                    ...rest
                }
            )
            usuario.password = bycript.hashSync(password, salt)
            await usuario.save()
        }
        const token = await genToken(usuario.id)
        res.status(201).json({
            message: `Gracias por Inscribirte ${nombre}`,
            usuario,
            token,
        })
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Hubo un error inesperado al grabar los datos',
            error: e.message,
        })
    }
}

const logIn = async (req = request, res = response) => {
    try {
        const { correo, password } = req.body
        const usuario = await Usuario.findOne({ correo, estado: true })
        if (!usuario) {
            return res.status(404).json({
                message: 'No existe este usuario',
            })
        }

        const noCrypt = bycript.compareSync(password, usuario.password)
        if (!noCrypt) {
            return res.status(400).json({
                message: 'Contraseña incorrecta',
            })
        }
        const token = await genToken(usuario.id)
        res.status(200).json({
            message: `Gracias por volver ${usuario.nombre}`,
            usuario,
            token,
        })
    } catch (e) {
        console.log('Error! no se pudo hacer Log-in'.red, e)
        res.status(400).json({
            message: 'No fué posible hacer Log-in',
            error: e.message,
        })
    }
}

const update = async (req = request, res = response) => {
    try {
        const Authorization = req.header('Authorization')
        const token = Authorization.split('Bearer ')[1]
        const { correo, nombre, estado, ...rest } = req.body
        if('transporte' in rest) rest.transporte = transport(rest.transporte)
        const data = rest
        const { id } = jwt.verify(token, process.env.TOKEN_USER)
        const usuario = await Usuario.findByIdAndUpdate(id, data, { new: true })
        res.status(200).json({
            message: `Hemos actualizado tus datos ${usuario.nombre} correctamente`,
            usuario,
        })
    } catch (e) {
        console.log('Error! no se pudieron actualizar los datos'.red, e)
        res.status(500).json({
            message: 'No se pudo actualizar el usuario',
            error: e.message,
        })
    }
}

const eliminar = async (req = request, res = response) => {
    try {
        const Authorization = req.header('Authorization')
        const token = Authorization.split('Bearer ')[1]
        const { id } = jwt.verify(token, process.env.TOKEN_USER)
        const usuario = await Usuario.findByIdAndUpdate(id, { estado: false })
        res.status(200).json({
            message: `Gracias por haber estado con nosotros ${usuario.nombre}, tus datos se han eliminado correctamente`,
        })
    } catch (e) {
        console.log('Error! no se pudo eliminar el perfil'.red, e)
        res.status(500).json({
            message: 'No fué posible eliminar el perfil',
            error: e.message,
        })
    }
}

const auth = async (req = request, res = response) => {
    try {
        const Authorization = req.header('Authorization')
        const token = Authorization.split('Bearer ')[1]

        const tokenDecoded = jwt.verify(token, process.env.TOKEN_USER)
        const usuario = await Usuario.findOne({ _id: tokenDecoded.id, estado: true })

        if (!usuario) return res.status(404).json({
            message: 'No existe este usuario'
        })

        res.status(200).json({
            message: 'El token está valido',
            isTokenValid: true,
            usuario: usuario.nombre,
            img: usuario.img
        })

    } catch (e) {
        const err = "Cannot read properties of undefined (reading 'split')"
        const noValid = ['jwt expired', 'invalid token', 'invalid signature', 'jwt malformed']
        console.log('ERROR!, HUBO UN PROBLEMA'.red, e.message)

        if (e.message === err) return res.status(400).json({
            message: "No existe Token",
            isTokenValid: false
        })
        if (noValid.includes(e.message)) return res.status(401).json({
            message: e.message,
            isTokenValid: false
        })

        res.status(500).json({
            message: e.message
        })
    }
}


module.exports = {
    signUp,
    logIn,
    update,
    eliminar,
    auth
}
