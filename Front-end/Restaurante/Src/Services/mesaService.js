import api from './requisicaoService'
import restauranteService from './restauranteService'
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
    async create(MesaModel) {
        return api.post('/mesa/create/', {
            'mesa_data_hora': MesaModel.mesa_data + ' ' + MesaModel.mesa_hora,
            'mesa_quant_mesas': MesaModel.mesa_quant_mesas,
            'mesa_quant_pessoas': MesaModel.mesa_quant_pessoas,
            'mesa_restaurante_codigo': MesaModel.mesa_restaurante_codigo
        })
    },
    async update(MesaModel) {
        console.log('service update ->', MesaModel);

        return api.post('/mesa/update',
            {
                'mesa_codigo': MesaModel.mesa_codigo,
                'mesa_data_hora': MesaModel.mesa_data + ' ' + MesaModel.mesa_hora,
                'mesa_quant_mesas': MesaModel.mesa_quant_mesas,
                'mesa_quant_pessoas': MesaModel.mesa_quant_pessoas,
                'mesa_restaurante_codigo': MesaModel.restaurante_codigo
            }
        ).then(function (response) {
            return response.data
        }).catch(function (error) {
            return error
        })
    },
    async delete(mesa_codigo) {
        return api.post('/mesa/update',
            {
                'mesa_codigo': mesa_codigo,
                'mesa_status': 0,

            }
        ).then(function (response) {
            return response.data
        }).catch(function (error) {
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

}