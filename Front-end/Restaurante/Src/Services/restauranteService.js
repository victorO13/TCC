import api from './requisicaoService'

module.exports = {
    all() {
        api.get('/restaurante/all').then((response) => {
            console.log(response.data);
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