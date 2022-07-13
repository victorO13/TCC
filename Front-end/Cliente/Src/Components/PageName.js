import React from 'react'
import {
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'

//STYLES 
import style from '../Styles/stylePageName'
import colors from '../Styles/Colors/Colors'

function PageName(props) {

    return (
        <View style={style.container}>

            <Image
                style={[style.icon]}
                source={require('../../assets/icon2.png')}
            />
            <Text style={[style.text]}>{props.name}</Text>



        </View>
    )
}

export default PageName