module.exports = {

    async all(req, res) {

        try {

            const clienteService = require('../Services/clienteService')
            const response = await clienteService.all(req, res)
            return response

        } catch (e) {

            return
        }

    },

    async create(req, res) {

        try {

            const clienteService = require('../Services/clienteService')
            const response = await clienteService.create(req, res)


            return response

        } catch (e) {

            return
        }

    },

    async update(req, res) {

        try {

            const clienteService = require('../Services/clienteService')
            const response = await clienteService.update(req, res)

            return response

        } catch (e) {

            return
        }

    },

    async findByEmail(req, res) {

        try {

            const clienteService = require('../Services/clienteService')
            const response = await clienteService.findByEmail(req, res)

            return response

        } catch (e) {

            return
        }

    },



}