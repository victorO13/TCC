
module.exports = {

    async all(req, res) {
        const con = require('../Database/conexao')
        await con('restaurantes')

            .then(restaurantes => {

                return res.status(200).json({ restaurantes })

            })
            .catch(erro => {

                return res.status(500).json({ message: 'não foi possivel executar a operação!' })

            })
    },

    async create(req, res) {
        //consulta banco usuario
        const con = require('../Database/conexao')

        let restaurante = req.body
        await con('restaurantes').insert(restaurante)
            .then(restaurante => {
                let restaurante_codigo = restaurante[0]

                return res.status(200).json({ message: "restaurante criado com sucesso", restaurante_codigo })

            }).catch(erro => {

                return res.status(500).json({ message: 'não foi possivel executar a operação!' })

            })

    },
    async findByEmail(req, res) {
        const con = require('../Database/conexao')
        const email = req.body.email

        await con('restaurantes').where({ restaurante_email: email })
            .first()
            .then(restaurante => {
                if (restaurante) {

                    return res.status(200).json({ restaurante })

                } else {

                    return res.status(200).json({ notExist: true, message: 'registro não encontrado!' })

                }
            })
            .catch(erro => {
                return res.status(200).json({ message: 'não foi possivel executar a operação!' })
            })
    },

    async findByCodigo(req, res) {
        const con = require('../Database/conexao')
        const restaurante_codigo = req.body.restaurante_codigo

        await con('restaurantes').where({ restaurante_codigo: restaurante_codigo })
            .first()
            .then(restaurante => {
                if (restaurante) {

                    return res.status(200).json({ restaurante })

                } else {

                    return res.status(200).json({ notExist: true, message: 'registro não encontrado!' })

                }
            })
            .catch(erro => {
                return res.status(200).json({ message: 'não foi possivel executar a operação!' })
            })
    },


    async update(req, res) {
        const changes = req.body
        const con = require('../Database/conexao')
        const restaurante_codigo = changes.restaurante_codigo
        delete changes.restaurante_codigo
        return con('restaurantes').where({ restaurante_codigo })
            .update(changes)
            .then(restaurante => {

                if (restaurante) {
                    return res.status(200).json({ message: 'restaurante atualizado com sucesso!' })
                } else {
                    return res.status(200).json({ message: 'registro não encontrado!' })
                }
            })
            .catch(erro => {
                return res.status(200).json({ message: 'não foi possivel executar a operação!' })
            })
    }


}