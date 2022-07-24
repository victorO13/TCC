
module.exports = {

    async all(req, res) {
        const con = require('../Database/conexao')
        await con('reservas')

            .then(reservas => {

                return res.status(200).json({ reservas })

            })
            .catch(erro => {

                return res.status(200).json({ message: 'não foi possivel executar a operação!' })

            })
    },

    async create(req, res) {
        //consulta banco usuario
        const con = require('../Database/conexao')

        reserva = req.body
        console.log(req)
        await con('reservas').insert(reserva)
            .then(reserva => {
                let reserva_codigo = reserva[0]
                return res.status(200).json({ message: "reserva criada com sucesso", reserva_codigo })

            }).catch(erro => {
                console.log(erro)
                return res.status(200).json({ message: 'não foi possivel executar a operação!' })

            })

    },
    async update(req, res) {
        const changes = req.body
        const con = require('../Database/conexao')
        const reserva_codigo = changes.reserva_codigo
        delete changes.reserva_codigo
        return con('reservas').where({ reserva_codigo })
            .update(changes)
            .then(reserva => {

                if (reserva) {
                    return res.status(200).json({ message: 'reserva atualizada com sucesso!' })
                } else {
                    return res.status(200).json({ message: 'registro não encontrado!' })
                }
            })
            .catch(erro => {
                return res.status(200).json({ message: 'não foi possivel executar a operação!' })
            })
    },
    async findByCliente(req, res) {
        const con = require('../Database/conexao')
        const cliente_codigo = req.body.cliente_codigo
        await con('reservas').where({ reserva_cliente_codigo: cliente_codigo })
            .innerJoin('clientes', 'reserva_cliente_codigo', 'clientes.cliente_codigo')
            .innerJoin('restaurantes', 'reserva_restaurante_codigo', 'restaurantes.restaurante_codigo')

            .then(reservas => {
                if (reservas) {

                    return res.status(200).json({ reservas })

                } else {

                    return res.status(200).json({ notExist: true, message: 'registro não encontrado!' })

                }
            })
            .catch(erro => {
                return res.status(200).json({ message: 'não foi possivel executar a operação!' })
            })
    },

    async findByRestaurante(req, res) {
        const con = require('../Database/conexao')
        const restaurante_codigo = req.body.restaurante_codigo

        await con('reservas').where({ reserva_restaurante_codigo: restaurante_codigo })
            .innerJoin('clientes', 'reserva_cliente_codigo', 'clientes.cliente_codigo')
            .innerJoin('mesas', 'reserva_mesa_codigo', 'mesas.mesa_codigo')
            .innerJoin('restaurantes', 'reserva_restaurante_codigo', 'restaurantes.restaurante_codigo')



            .then(reservas => {
                if (reservas) {

                    return res.status(200).json({ reservas })

                } else {

                    return res.status(200).json({ notExist: true, message: 'registro não encontrado!' })

                }
            })
            .catch(erro => {
                return res.status(200).json({ message: 'não foi possivel executar a operação!' })
            })
    },

}