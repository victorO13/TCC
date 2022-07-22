import React, { useState } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'


//SERVICES
import reservaHasPratosService from '../Services/reservaHasPratosService'


//STYLES 
import style from '../Styles/styleItemListReservas'
import colors from '../Styles/Colors/Colors'

function ItemListReservas(props) {
    const [qtdPratos, setQtdPratos] = useState(0)

    function getCountPratos(reserva_codigo) {
        return reservaHasPratosService.findByReservaCountPratos(reserva_codigo)
            .then(r => {
                setQtdPratos(r.reservasHasPratos[0].qtd_pratos_reserva)
            })
    }
    getCountPratos(props.reserva_codigo)
    return (
        <View style={style.container}>
            <View style={style.viewData}>
                <Text style={style.data_mes}>{props.mes}</Text>
                <Text style={style.data_nome_dia}>Dia</Text>
                <Text style={style.data_dia}>{props.dia}</Text>
            </View>
            <View style={style.viewHora}>
                <View style={style.viewTopo}>
                    <Text style={style.data_hora}>{props.hora}</Text>
                </View>
                <Text style={style.nome}>{props.nomePessoa}</Text>
                <View style={style.viewDetalhes}>
                    <View>
                        <Text style={style.txtPratos}>Pratos:</Text>
                        <View style={style.IconPratos}>
                            <Text style={style.txtIcon}>{qtdPratos}</Text>
                            <MaterialIcons name="restaurant" size={30} color={colors.fontColorPrimary} />
                        </View>
                    </View>
                    <View>
                        <Text style={style.txtPratos}>Pessoas:</Text>
                        <View style={style.IconPratos}>
                            <Text style={style.txtIcon}>{props.qtdPessoa}</Text>
                            <FontAwesome name="user" size={30} color={colors.fontColorPrimary} />
                        </View>
                    </View>
                </View>
                <TouchableOpacity>
                    <Text onPress={props.nav} style={style.txtMostrarMais}>{'Mostrar Mais >>'}</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

export default ItemListReservas