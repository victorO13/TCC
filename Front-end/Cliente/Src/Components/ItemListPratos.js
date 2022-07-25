import React, { useState } from 'react'
import { Text, View, Switch, TouchableOpacity, ColorPropType } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'

//STYLES 
import style from '../Styles/styleItemListPratos'
import colors from '../Styles/Colors/Colors'

function ItemListPratos(props) {
    const [isEnabled, setIsEnabled] = useState(false)
    const toggleSwitch = () => {
        if (!isEnabled) {
            props.funcAddThis()
        } else {
            props.funcRemoveThis()
        }
        setIsEnabled(previousState => !previousState)

    }

    let star = []

    for (let i = 0; i < props.star && props.star <= 5; i++) {
        star.push(
            <MaterialIcons key={i} name="star" size={16} color={colors.primary} />
        )
    }

    return (


        <View style={style.container}>
            <View style={{ flexDirection: 'row-reverse' }}>
                <Switch
                    trackColor={{ false: colors.primary, true: colors.secondary }}
                    thumbColor={isEnabled ? colors.primary : colors.fontColorPrimary}
                    ios_backgroundColor={colors.secondary}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>

            <Text style={style.nome}>{props.nome}</Text>
            <Text
                style={style.descricao}>{props.descricao}
            </Text>
            <Text style={style.categoria}>Categoria: {props.categoria}</Text>
            <Text style={style.qtdPessoas}>Serve até: {props.quantidade} pessoa(s)</Text>
            <Text style={style.qtdPessoas}>R$ {props.preco}</Text>
            <Text style={style.start}>{star}</Text>
            <View style={style.rodape}>
                <MaterialIcons name="room-service" size={50} color={colors.primary} />
            </View>
        </View>
    )
}

export default ItemListPratos