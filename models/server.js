const express = require('express')
const cors = require('cors')
const conection = require('../dataBase/config')
const message = require('../helpers/message')


class Server {

    #PUERTO = process.env.PUERTO

    constructor() {
        this.app = express()
        this.dataBase()
        this.middlewares()
    }

    middlewares() {
        this.app.use(cors())
        this.app.use(express.json())
    }
    async dataBase () {
        await conection()
    }

    listen() {
        this.app.listen(this.#PUERTO, message(this.#PUERTO))
    }
}


module.exports = Server