import api from './requisicaoService'

module.exports = {

    async all(req, res) {

    },
    async create(clienteModel) {

        return api.post('/cliente/create/', {
            'cliente_nome': clienteModel.cliente_nome,
            'cliente_email': clienteModel.cliente_email,
            'cliente_cpf': clienteModel.cliente_cpf,
            'cliente_telefone': clienteModel.cliente_telefone,
            'cliente_Sexo': clienteModel.cliente_sexo,
            'cliente_Regiao': clienteModel.cliente_regiao
        })

    },
    async findByEmail(email) {

        return api.post('/cliente/findByEmail/', {
            "email": email
        })
            .then(function (response) {
                return response.data
            })
            .catch(function (error) {
                return error
            })


    },
    async update(clienteModel) {

        return api.post('/cliente/update',
            {
                cliente_codigo: clienteModel.cliente_codigo,
                cliente_cpf: clienteModel.cliente_cpf,
                cliente_email: clienteModel.cliente_email,
                cliente_nome: clienteModel.cliente_nome,
                cliente_regiao: clienteModel.cliente_regiao,
                cliente_telefone: clienteModel.cliente_telefone,
                cliente_sexo: clienteModel.cliente_sexo,
            }
        ).then(function (response) {
            return response.data
        }).catch(function (error) {
            return error
        })
    }

}