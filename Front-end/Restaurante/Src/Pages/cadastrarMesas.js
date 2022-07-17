import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native'


import { TextInputMask } from 'react-native-masked-text'


//STYLES
import styleGlobal from '../Styles/styleGlobal'
import styleCadastro from '../Styles/styleCadastro'
import styleCadastrarMesa from '../Styles/styleCadastrarMesa'
import colors from '../Styles/Colors/Colors'
//ICON
import { Octicons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'

//COMPONENTS
import PageName from '../Components/PageName'
//MODEL
//import MesaModel from '../model/MesaModel'

//SERVICE
//import mesaService from '../services/mesaService'

//UTIL
import dateFormat from '../Util/dateFormat'

export default function InicialScreen({ route, navigation }) {
  const [data, setData] = useState('')
  const [hora, setHora] = useState('')
  const [qtdMesa, setQtdMesa] = useState(0)
  const [qtdPessoa, setQtdPessoa] = useState(0)
  const [codigo, setCodigo] = useState('route.params.resturante_codigo')
  const [email, setEmail] = useState('route.params.restaurante_email')

  function cadastrar() {
    // let dataFormatada = dateFormat.formatDateToStringNoBr(data)
    // let mesas = new MesaModel(dataFormatada, hora,
    //   qtdMesa, qtdPessoa, codigo, email)
    // mesaService.create(mesas)
    Alert.alert(
      "Sucesso!",
      "Mesa adicionada com sucesso!",
      [
        { text: "OK", onPress: () => navigation.navigate('main') }
      ],
      { cancelable: false }
    )
  }
  return (


    <View style={[styleGlobal.container, styleCadastrarMesa.container]}>
      <PageName name='CADASTRAR MESAS' />
      <View style={[styleCadastro.ViwInput]}>
        <Text style={styleCadastro.txt}>DATA:</Text>

        <TextInputMask
          type={'datetime'}
          options={{
            format: 'DD/MM/YYYY'
          }}
          value={data}
          onChangeText={data => { setData(data) }}
          style={styleCadastro.imput}
        />

        <Text style={styleCadastro.txt}>HORA:</Text>
        <TextInputMask
          type={'datetime'}
          options={{
            format: 'HH:mm'
          }}
          style={[styleCadastro.imput, { marginBottom: 20 }]}
          value={hora}
          onChangeText={TextInput => setHora(TextInput)}
        />


        <View>
          <View style={styleCadastrarMesa.box}>
            <Text style={styleCadastrarMesa.txt}>NÚMERO DE MESAS</Text>
            <View style={{ flexDirection: 'row-reverse', alignSelf: 'center' }}>
              <TouchableOpacity zIndex={-1} onPress={() => setQtdMesa(qtdMesa + 1)}>
                <Octicons name="diff-added" size={35} color={colors.primary} />
              </TouchableOpacity>
              <Text style={styleCadastrarMesa.quant}>{qtdMesa} {<FontAwesome name="inbox" size={30} color={colors.primary} />}</Text>
              <TouchableOpacity zIndex={-1} onPress={() => qtdMesa > 0 ? setQtdMesa(qtdMesa - 1) : false}>
                <Octicons name="diff-removed" size={35} color={colors.primary} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styleCadastrarMesa.box}>
            <Text style={styleCadastrarMesa.txt}>NÚMERO MÁXIMO DE PESSOAS</Text>
            <Text style={styleCadastrarMesa.descricao}>(COM MAIS DE 4 ANOS)</Text>
            <View style={{ flexDirection: 'row-reverse', alignSelf: 'center' }}>
              <TouchableOpacity zIndex={0} onPress={() => setQtdPessoa(qtdPessoa + 1)}>
                <Octicons name="diff-added" size={35} color={colors.primary} />
              </TouchableOpacity>
              <Text style={styleCadastrarMesa.quant}>{qtdPessoa} {<FontAwesome name="user" size={30} color={colors.primary} />}</Text>

              <TouchableOpacity zIndex={-1} onPress={() => qtdPessoa > 0 ? setQtdPessoa(qtdPessoa - 1) : false} >
                <Octicons name="diff-removed" size={35} color={colors.primary} />
              </TouchableOpacity>
            </View>
          </View>

        </View>


        <View zIndex={-1}>
          <TouchableOpacity
            style={[styleCadastro.Btn]}
            onPress={() => cadastrar()}
          >
            <Text style={styleGlobal.button}>CADASTRAR</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

