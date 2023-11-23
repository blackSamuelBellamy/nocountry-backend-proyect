const express = require('express')
const cors = require('cors')
const message = require('../helpers/message')


class Server {

    #PUERTO = process.env.PUERTO

    constructor() {
        this.app = express()
        this.middlewares()
    }

    middlewares() {
        this.app.use(cors())
        this.app.use(express.json())
    }

    listen() {
        this.app.listen(this.#PUERTO, message(this.#PUERTO))
    }
}


module.exports = Server