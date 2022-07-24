import api from './requisicaoService'
module.exports = {

    async all() {
        return api.get('/restaurante/all/')
            .then(function (response) {
                return response.data
            })
            .catch(function (error) {
                return error
            })
    },
    async findByCodigo(restaurante_codigo) {

        return api.post('/restaurante/findByCodigo', {
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