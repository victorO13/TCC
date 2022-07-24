module.exports = {

    async all(req, res) {

        try {

            const reservaService = require('../Services/reservaService')
            const response = await reservaService.all(req, res)
            return response

        } catch (e) {

            return
        }

    },
    async create(req, res) {

        try {

            const reservaService = require('../Services/reservaService')
            const response = await reservaService.create(req, res)


            return response

        } catch (e) {

            return
        }

    },
    async update(req, res) {

        try {

            const reservaService = require('../Services/reservaService')
            const response = await reservaService.update(req, res)

            return response

        } catch (e) {

            return
        }

    },
    async findByCliente(req, res) {

        try {

            const reservaService = require('../Services/reservaService')
            const response = await reservaService.findByCliente(req, res)

            return response

        } catch (e) {

            return
        }

    },
    async findByRestaurante(req, res) {

        try {

            const reservaService = require('../Services/reservaService')
            const response = await reservaService.findByRestaurante(req, res)

            return response

        } catch (e) {

            return
        }

    },

}