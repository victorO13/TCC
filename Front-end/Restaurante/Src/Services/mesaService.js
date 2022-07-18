import React, { useState } from 'react'
import restauranteService from './restauranteService'
module.exports = {

    async all() {
        const requisicao = require('./requisicaoService')
        return requisicao.get('/mesa/all/')
            .then(function (response) {
                return response.data
            })
            .catch(function (error) {
                return error
            })
    },
    async create(MesaModel) {
        const requisicao = require('./requisicaoService')

        if (MesaModel.mesa_codigo == null) {
            restauranteService.findByEmail(MesaModel.mesa_user)
                .then((result) => {
                    //console.log(result)
                    return requisicao.post('/mesa/create/', {
                        'mesa_data_hora': MesaModel.mesa_data + ' ' + MesaModel.mesa_hora,
                        'mesa_quant_mesas': MesaModel.mesa_quant_mesas,
                        'mesa_quant_pessoas': MesaModel.mesa_quant_pessoas,
                        'mesa_restaurante_codigo': result.restaurante.restaurante_codigo
                    })
                })
        } else {
            return requisicao.post('/mesa/create/', {
                'mesa_data_hora': MesaModel.mesa_data + ' ' + MesaModel.mesa_hora,
                'mesa_quant_mesas': MesaModel.mesa_quant_mesas,
                'mesa_quant_pessoas': MesaModel.mesa_quant_pessoas,
                'mesa_restaurante_codigo': MesaModel.restaurante_codigo
            })
        }


    },
    async update(MesaModel) {
        const requisicao = require('./requisicaoService')

        return requisicao.post('/mesa/update',
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
        const requisicao = require('./requisicaoService')

        return requisicao.post('/mesa/update',
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
        const requisicao = require('./requisicaoService')
        return requisicao.post('/mesa/findByRestaurante/', {
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