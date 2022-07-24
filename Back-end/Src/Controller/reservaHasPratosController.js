module.exports = {

    async all(req, res) {

        try {

            const reservaHasPratosService = require('../Services/reservaHasPratosService')
            const response = await reservaHasPratosService.all(req, res)
            return response

        } catch (e) {

            return
        }

    },
    async create(req, res) {

        try {

            const reservaHasPratosService = require('../Services/reservaHasPratosService')
            const response = await reservaHasPratosService.create(req, res)


            return response

        } catch (e) {

            return
        }

    },

    async findByReserva(req, res) {

        try {

            const reservaHasPratosService = require('../Services/reservaHasPratosService')
            const response = await reservaHasPratosService.findByReserva(req, res)

            return response

        } catch (e) {

            return
        }

    },
    async findByReservaCountPratos(req, res) {

        try {

            const reservaHasPratosService = require('../Services/reservaHasPratosService')
            const response = await reservaHasPratosService.findByReservaCountPratos(req, res)

            return response

        } catch (e) {

            return
        }

    },

}