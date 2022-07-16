import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'

//STYLES 
import style from '../Styles/styleItemListRestaurante'
import colors from '../Styles/Colors/Colors';

function ItemListRestaurante(props) {

    let star = []

    for (let i = 0; i < props.star; i++) {
        star.push(
            <MaterialIcons key={i} name="star" size={16} color={colors.primary} />
        )
    }

    return (

        <TouchableOpacity
            onPress={props.func}>
            <View style={style.container}>
                <Text style={style.nome}>{props.nome}</Text>
                <Text
                    style={style.descricao}>{props.descricao}
                </Text>
                <Text>{star}</Text>
                <View style={style.rodape}>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ItemListRestaurante