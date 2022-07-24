module.exports = {

    async all(req, res) {

        try {

            const pratoService = require('../Services/pratoService')
            const response = await pratoService.all(req, res)
            return res.status(201).json(response)

        } catch (e) {

            return
        }

    },

    async create(req, res) {

        try {

            const pratoService = require('../Services/pratoService')
            const response = await pratoService.create(req, res)


            return res.status(201).json(response)

        } catch (e) {

            return
        }

    },
    async update(req, res) {

        try {

            const pratoService = require('../Services/pratoService')
            const response = await pratoService.update(req, res)

            return response

        } catch (e) {

            return
        }

    },

    async findByCodigo(req, res) {

        try {

            const pratoService = require('../Services/pratoService')
            const response = await pratoService.findByCodigo(req, res)

            return response

        } catch (e) {

            return
        }

    },

    async findByRestaurante(req, res) {

        try {

            const pratoService = require('../Services/pratoService')
            const response = await pratoService.findByRestaurante(req, res)

            return response

        } catch (e) {

            return
        }

    },


}