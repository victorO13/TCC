import api from './requisicaoService'

module.exports = {

    async all() {

        return api.get('/prato/all/')
            .then(function (response) {
                return response.data
            })
            .catch(function (error) {
                return error
            })
    },
    async findByRestaurante(restaurante_codigo) {

        return api.post('/prato/findByRestaurante/', {
            "restaurante_codigo": restaurante_codigo
        })
            .then(function (response) {
                return response.data
            })
            .catch(function (error) {
                return error
            })
    },
    async findByCodigo(prato_codigo) {

        return api.post('/prato/findByCodigo', {
            "prato_codigo": prato_codigo
        })
            .then(function (response) {
                return response.data
            })
            .catch(function (error) {
                return error
            })


    },

}