import React from 'react'
import {
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native'


//STYLES 
import style from '../Styles/stylePageName'


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