import api from './requisicaoService'
import restauranteService from './restauranteService'
module.exports = {

    async all() {
        try {
            const response = await api.get('/prato/all/')
            return response.data
        } catch (error) {
            return error
        }
    },
    create(PratoModel) {
        return api.post('/prato/create/', {
            "prato_nome": PratoModel.prato_nome,
            //"prato_categoria": PratoModel.prato_categoria,
            "prato_quantidade": PratoModel.prato_quantidade,
            "prato_descricao": PratoModel.prato_descricao,
            "prato_preco": PratoModel.prato_preco,
            "prato_restaurante_codigo": PratoModel.prato_restaurante_codigo,

        })
    },

    async update(PratoModel) {
        return api.post('/prato/update',
            {
                'prato_codigo': PratoModel.prato_codigo,
                'prato_nome': PratoModel.prato_nome,
                'prato_categoria': PratoModel.prato_categoria,
                'prato_quantidade': PratoModel.prato_quantidade,
                'prato_descricao': PratoModel.prato_descricao,
                'prato_preco': PratoModel.prato_preco,
                'prato_restaurante_codigo': PratoModel.prato_restaurante_codigo
            }
        ).then(function (response) {
            return response.data
        }).catch(function (error) {
            return error
        })
    },
    async delete(prato_codigo) {

        return api.post('/prato/update',
            {
                'prato_codigo': prato_codigo,
                'prato_status': 0,

            }
        ).then(function (response) {
            return response.data
        }).catch(function (error) {
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

}