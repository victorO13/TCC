module.exports = {

    async all(req, res) {

        try {

            const mesaService = require('../Services/mesaService')
            const response = await mesaService.all(req, res)
            return res.status(201).json(response)

        } catch (e) {

            return
        }

    },

    async create(req, res) {

        try {

            const mesaService = require('../Services/mesaService')
            const response = await mesaService.create(req, res)


            return res.status(201).json(response)

        } catch (e) {

            return
        }

    },
    async update(req, res) {

        try {

            const mesaService = require('../Services/mesaService')
            const response = await mesaService.update(req, res)

            return response

        } catch (e) {

            return
        }

    },
    async findByRestaurante(req, res) {

        try {

            const mesaService = require('../Services/mesaService')
            const response = await mesaService.findByRestaurante(req, res)

            return response

        } catch (e) {

            return
        }

    },
    async findByRestauranteDisponivel(req, res) {

        try {

            const mesaService = require('../Services/mesaService')
            const response = await mesaService.findByRestauranteDisponivel(req, res)

            return response

        } catch (e) {

            return
        }

    },
    async findByRestauranteDisponivelFilterQtdPessoa(req, res) {

        try {

            const mesaService = require('../Services/mesaService')
            const response = await mesaService.findByRestauranteDisponivelFilterQtdPessoa(req, res)

            return response

        } catch (e) {

            return
        }

    },

}