import api from './requisicaoService'

module.exports = {
    all() {
        api.get('/restaurante/all').then((response) => {

        })
    },
    create(modelRestaurante) {
        modelRestaurante = modelRestaurante.params
        return api.post('/restaurante/create', {
            "restaurante_nome": modelRestaurante.restaurante_nome,
            "restaurante_email": modelRestaurante.restaurante_email,
            "restaurante_cnpj": modelRestaurante.restaurante_cnpj,
            "restaurante_telefone": modelRestaurante.restaurante_telefone,
            "restaurante_fantasia": modelRestaurante.restaurante_fantasia,
            "restaurante_regiao": modelRestaurante.restaurante_regiao,
            "restaurante_descricao": modelRestaurante.restaurante_descricao
        })
    },
    async update(restauranteModel) {
        return api.post('/restaurante/update',
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
    async findByEmail(email) {
        try {
            const response = await api.post('/restaurante/findByEmail/', {
                "email": email
            });
            return response.data;
        } catch (error) {
            return error;
        }
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
    }
}