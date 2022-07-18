import restauranteService from './restauranteService'
module.exports = {

    async all() {
        const requisicao = require('./requisicaoService')
        return requisicao.get('/reserva/all/')
            .then(function (response) {
                return response.data
            })
            .catch(function (error) {
                return error
            })
    },
    async findByRestaurante(restaurante_codigo) {
        const requisicao = require('./requisicaoService')
        return requisicao.post('/reserva/findByRestaurante/', {
            "restaurante_codigo": restaurante_codigo
        })
            .then(function (response) {
                return response.data
            })
            .catch(function (error) {
                return error
            })


    },

}