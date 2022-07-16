import React, { useState } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native'

//STYLES
import styleGlobal from '../Styles/styleGlobal'
import styleCadastro from '../Styles/styleCadastro'
import Textarea from 'react-native-textarea'

//SERVICE
//import restauranteService from '../services/restauranteService'

export default function InicialScreen({ route, navigation }) {

    const [descricao, setDescricao] = useState('')

    function finalizar() {
        //route.params.restaurante_descricao = descricao

        /*let restaurante = route.params
        restauranteService.create(route)
            .then(result => {

                restaurante.restaurante_codigo = result.data.restaurante_codigo
                navigation.navigate('main', restaurante)

            })*/

        navigation.navigate('main', /*restaurante*/)
    }
    return (
        <View style={[styleGlobal.container]}>
            <Image
                style={[styleCadastro.icon, {}]}
                source={require('../../assets/icon.png')}
            />
            <Text style={[styleGlobal.txtIcon, {}]}>FINALIZAR CADASTRO</Text>
            <View style={{ width: 310, paddingTop: 50 }}>
                <Text style={styleCadastro.txt}>DESCRIÇÃO:</Text>
                <Textarea
                    containerStyle={styleCadastro.textareaContainer}
                    style={styleCadastro.textarea} value={descricao}
                    onChangeText={TextInput => setDescricao(TextInput)}
                />
            </View>

            <View zIndex={1}>
                <TouchableOpacity
                    style={[styleCadastro.Btn, { marginTop: 130 }]}
                    onPress={() => finalizar()}
                >
                    <Text style={styleGlobal.button}>FINALIZAR</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

