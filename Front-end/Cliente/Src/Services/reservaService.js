import api from './requisicaoService'

module.exports = {

    async all() {

        return requisicao.get('/reserva/all/')
            .then(function (response) {
                return response.data
            })
            .catch(function (error) {
                return error
            })
    },
    async findByCliente(cliente_codigo) {

        return api.post('/reserva/findByCliente/', {
            "cliente_codigo": cliente_codigo
        })
            .then(function (response) {
                return response.data
            })
            .catch(function (error) {
                return error
            })
    },
    async reservaAndPratos(reservaModel) {
        //console.log(reservaModel)
        api.post('/reserva/create/', {
            "reserva_cliente_codigo": reservaModel.reserva_cliente_codigo,
            "reserva_mesa_codigo": reservaModel.reserva_mesa_codigo,
            "reserva_restaurante_codigo": reservaModel.reserva_restaurante_codigo,
            "reserva_qtd_pessoas": reservaModel.reserva_qtd_pessoas,
            "reserva_data": reservaModel.reserva_data
        }).then((r) => {
            //r.data.reserva_codigo
            for (const element of reservaModel.reserva_pratos) {
                //AQUI TENTAR CADASTRAR AS RESERVAS PRATOS
                api.post('/reservaHasPratos/create/', {
                    "reserva_has_prato_quant_prato": 1,
                    "reserva_has_prato_reserva_codigo": r.data.reserva_codigo,
                    "reserva_has_prato_prato_codigo": element.prato_codigo
                })
                    .then((x) => {
                        api.post('/mesa/update', {
                            "mesa_codigo": reservaModel.reserva_mesa_codigo,
                            "mesa_quant_mesas": (reservaModel.reserva_mesa_quant_mesas - 1)

                        }).then((r) => { console.log(r) })
                    })
                    .catch((error) => { })
            }
        }).catch((error) => { })
    },



}