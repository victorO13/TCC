
module.exports = {

    async all(req, res) {
        const con = require('../Database/conexao')
        await con('clientes')

            .then(clientes => {

                return res.status(200).json({ clientes })

            })
            .catch(erro => {

                return res.status(500).json({ message: 'não foi possivel executar a operação!' })

            })
    },

    async create(req, res) {
        //consulta banco usuario
        const con = require('../Database/conexao')

        cliente = req.body
        await con('clientes').insert(cliente)
            .then(cliente => {

                let cliente_codigo = cliente[0]

                return res.status(200).json({ message: "cliente criado com sucesso", cliente_codigo })

            }).catch(erro => {

                return res.status(500).json({ message: 'não foi possivel executar a operação!' })

            })

    },
    async update(req, res) {
        const changes = req.body
        const con = require('../Database/conexao')
        const cliente_codigo = changes.cliente_codigo
        delete changes.cliente_codigo
        return con('clientes').where({ cliente_codigo })
            .update(changes)
            .then(cliente => {

                if (cliente) {
                    return res.status(200).json({ message: 'cliente atualizado com sucesso!' })
                } else {
                    return res.status(200).json({ message: 'registro não encontrado!' })
                }
            })
            .catch(erro => {
                return res.status(200).json({ message: 'não foi possivel executar a operação!' })
            })
    },
    async findByEmail(req, res) {
        const con = require('../Database/conexao')
        const email = req.body.email
        console.log(email)

        await con('clientes').where({ cliente_email: email })
            .first()
            .then(cliente => {
                if (cliente) {

                    return res.status(200).json({ cliente })

                } else {

                    return res.status(200).json({ notExist: true, message: 'registro não encontrado!' })

                }
            })
            .catch(erro => {
                return res.status(200).json({ message: 'não foi possivel executar a operação!' })
            })
    },


}