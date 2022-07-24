import api from './requisicaoService'

module.exports = {

    async all() {

        return api.get('/mesa/all/')
            .then(function (response) {
                return response.data
            })
            .catch(function (error) {
                return error
            })
    },
    async findByRestaurante(restaurante_codigo) {

        return api.post('/mesa/findByRestaurante/', {
            "restaurante_codigo": restaurante_codigo
        })
            .then(function (response) {
                return response.data
            })
            .catch(function (error) {
                return error
            })
    },
    async findByRestauranteDisponivel(restaurante_codigo) {

        return api.post('/mesa/findByRestaurante/disponivel', {
            "restaurante_codigo": restaurante_codigo
        })
            .then(function (response) {
                return response.data
            })
            .catch(function (error) {
                return error
            })
    },
    async findByRestauranteDisponivelFilterQtdPessoa(restaurante_codigo, qtd_pessoa) {

        return api.post('/mesa/findByRestaurante/disponivel/filter/qtdPessoa', {
            "restaurante_codigo": restaurante_codigo,
            "qtd_pessoa": qtd_pessoa
        })
            .then(function (response) {
                return response.data
            })
            .catch(function (error) {
                return error
            })
    },

}