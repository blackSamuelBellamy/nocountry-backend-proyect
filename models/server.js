const express = require('express')
const cors = require('cors')
const connection = require('../dataBase/connection')
const message = require('../helpers/message')

class Server {

    #PORT = process.env.PORT
    #usuario = '/api/usuario'
    #newsletter = '/api/newsletter'

    constructor() {
        this.app = express()
        this.dataBase()
        this.middlewares()
        this.routes()
    }

    middlewares() {
        this.app.use(cors())
        this.app.use(express.json())
    }
    async dataBase() {
        await connection()
    }

    routes() {
        this.app.use(this.#usuario, require('../routes/routes.usuario'))
        this.app.use(this.#newsletter, require('../routes/routes.newsletter'))
    }

    listen() {
        this.app.listen(this.#PORT, message(this.#PORT))
    }
}


module.exports = Server