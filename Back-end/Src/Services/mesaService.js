
module.exports = {

    async all(req, res) {
        const con = require('../Database/conexao')
        await con('mesas')

            .then(mesas => {

                return res.status(200).json({ mesas })

            })
            .catch(erro => {

                return res.status(500).json({ message: 'não foi possivel executar a operação!' })

            })
    },
    async create(req, res) {
        //consulta banco usuario
        const con = require('../Database/conexao')

        mesa = req.body
        await con('mesas').insert(mesa)
            .then(mesa => {

                return res.status(200).json({ message: "mesa criada com sucesso", mesa })

            }).catch(erro => {

                return res.status(500).json({ message: 'não foi possivel executar a operação!' })

            })

    },
    async update(req, res) {
        const changes = req.body
        const con = require('../Database/conexao')
        const mesa_codigo = changes.mesa_codigo
        delete changes.mesa_codigo
        return con('mesas').where({ mesa_codigo })
            .update(changes)
            .then(mesa => {

                if (mesa) {
                    return res.status(200).json({ message: 'mesa atualizada com sucesso!' })
                } else {
                    return res.status(200).json({ message: 'registro não encontrado!' })
                }
            })
            .catch(erro => {
                return res.status(200).json({ message: 'não foi possivel executar a operação!' })
            })
    },
    async findByRestaurante(req, res) {
        const con = require('../Database/conexao')
        const restaurante_codigo = req.body.restaurante_codigo

        await con('mesas').where({ mesa_restaurante_codigo: restaurante_codigo, mesa_status: 1 })

            .then(mesas => {
                if (mesas) {

                    return res.status(200).json({ mesas })

                } else {

                    return res.status(200).json({ notExist: true, message: 'registro não encontrado!' })

                }
            })
            .catch(erro => {
                return res.status(200).json({ message: 'não foi possivel executar a operação!' })
            })
    },
    async findByRestauranteDisponivel(req, res) {
        const con = require('../Database/conexao')
        const restaurante_codigo = req.body.restaurante_codigo

        await con('mesas').where({ mesa_restaurante_codigo: restaurante_codigo, mesa_status: 1 })
            .andWhere('mesa_quant_mesas', '>', 0)
            .whereRaw('mesa_data_hora >= now()').orderBy('mesa_data_hora', 'asc')
            .then(mesas => {
                if (mesas) {

                    return res.status(200).json({ mesas })

                } else {

                    return res.status(200).json({ notExist: true, message: 'registro não encontrado!' })

                }
            })
            .catch(erro => {
                return res.status(200).json({ message: 'não foi possivel executar a operação!' })
            })
    },
    async findByRestauranteDisponivelFilterQtdPessoa(req, res) {
        const con = require('../Database/conexao')
        const restaurante_codigo = req.body.restaurante_codigo
        const qtd_pessoa = req.body.qtd_pessoa
        await con('mesas').where({ mesa_restaurante_codigo: restaurante_codigo, mesa_status: 1 })
            .andWhere('mesa_quant_pessoas', '>=', qtd_pessoa)
            .andWhere('mesa_quant_mesas', '>', 0)
            .whereRaw('mesa_data_hora >= now()').orderBy('mesa_data_hora', 'asc')
            .then(mesas => {
                if (mesas) {

                    return res.status(200).json({ mesas })

                } else {

                    return res.status(200).json({ notExist: true, message: 'registro não encontrado!' })

                }
            })
            .catch(erro => {
                return res.status(200).json({ message: 'não foi possivel executar a operação!' })
            })
    },
}