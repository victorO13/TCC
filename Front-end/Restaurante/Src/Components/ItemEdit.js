import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'

//STYLES 
import stylePerfil from '../Styles/stylePerfil'
import colors from '../Styles/Colors/Colors'


function ItemEdit(props) {


    return (


        <View style={stylePerfil.itemEdit}>
            <View style={{ flexDirection: 'row-reverse' }}>
                <TouchableOpacity onPress={props.nav} zIndex={-1}>
                    <MaterialIcons name="edit" size={45} color={colors.primary} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ItemEdit