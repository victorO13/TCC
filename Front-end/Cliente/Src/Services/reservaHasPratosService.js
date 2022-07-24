import api from './requisicaoService'

module.exports = {

    async all() {

        return api.get('/reservaHasPratos/all/')
            .then(function (response) {
                return response.data
            })
            .catch(function (error) {
                return error
            })
    },
    async create(reservaHasPratoModel) {

        return api.post('/reservaHasPratos/create/', {
            "reserva_has_prato_quant_prato": 1,
            "reserva_has_prato_reserva_codigo": 1,
            "reserva_has_prato_prato_codigo": 1
        })

    },
    async findByReserva(reservaCodigo) {
        return api.post('/reservaHasPratos/findByReserva', {
            "reserva_codigo": reservaCodigo
        })
            .then(function (response) {
                return response.data
            })
            .catch(function (error) {
                return error
            })


    },
    async findByReservaCountPratos(reservaCodigo) {
        return api.post('/reservaHasPratos/findByReservaCountPratos', {
            "reserva_codigo": reservaCodigo
        })
            .then(function (response) {
                return response.data
            })
            .catch(function (error) {
                return error
            })
    },


}