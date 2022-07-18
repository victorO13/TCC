
module.exports = {

    async create(restauranteModel) {
        const requisicao = require('./requisicaoService')
        restauranteModel = restauranteModel.params
        return requisicao.post('/restaurante/create', {
            'restaurante_nome': restauranteModel.restaurante_nome,
            'restaurante_email': restauranteModel.restaurante_email,
            'restaurante_cnpj': restauranteModel.restaurante_cnpj,
            'restaurante_telefone': restauranteModel.restaurante_telefone,
            'restaurante_fantasia': restauranteModel.restaurante_fantasia,
            'restaurante_regiao': restauranteModel.restaurante_regiao,
            'restaurante_descricao': restauranteModel.restaurante_descricao
        })
    },
    async findByEmail(email) {
        const requisicao = require('./requisicaoService')
        return requisicao.post('/restaurante/findByEmail/', {
            "email": email
        })
            .then(function (response) {
                return response.data
            })
            .catch(function (error) {
                return error
            })


    },

    async update(restauranteModel) {
        const requisicao = require('./requisicaoService')
        return requisicao.post('/restaurante/update',
            {
                restaurante_codigo: restauranteModel.restaurante_codigo,
                restaurante_cnpj: restauranteModel.restaurante_cnpj,
                restaurante_descricao: restauranteModel.restaurante_descricao,
                restaurante_email: restauranteModel.restaurante_email,
                restaurante_fantasia: restauranteModel.restaurante_fantasia,
                restaurante_nome: restauranteModel.restaurante_nome,
                restaurante_regiao: restauranteModel.restaurante_regiao,
                restaurante_telefone: restauranteModel.restaurante_telefone
            }
        ).then(function (response) {
            return response.data
        }).catch(function (error) {
            return error
        })
    },

    async findByCodigo(restaurante_codigo) {
        const requisicao = require('./requisicaoService')
        return requisicao.post('/restaurante/findByCodigo', {
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