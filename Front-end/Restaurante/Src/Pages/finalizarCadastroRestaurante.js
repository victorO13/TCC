import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native'

import { TextInputMask } from 'react-native-masked-text'


//STYLES
import styleGlobal from '../Styles/styleGlobal'
import styleCadastro from '../Styles/styleCadastro'
import DropDownPicker from 'react-native-dropdown-picker'
//MODEL
//import RestauranteModel from '../model/restauranteModel'

export default function InicialScreen({ route, navigation }) {

  //const user = route.params.user
  const [nomeCompleto, setNomeCompleto] = useState('user.name')
  const [fantasia, setFantasia] = useState('')
  const [email, setEmail] = useState('user.email')
  const [cnpj, setCnpj] = useState('')
  const [telefone, setTelefone] = useState('')
  // DropDownPicker REGIÂO
  const [openRegiao, setOpenRegiao] = useState(false);
  const [valueRegiao, setValueRegiao] = useState('selecione');
  const [Regiao, setRegiao] = useState([
    { label: 'SELECIONE...', color: 'red', value: 'selecione', hidden: true },
    { label: 'AC', value: 'AC' },
    { label: 'AL', value: 'AL' },
    { label: 'AP', value: 'AP' },
    { label: 'AM', value: 'AM' },
    { label: 'BA', value: 'BA' },
    { label: 'CE', value: 'CE' },
    { label: 'ES', value: 'ES' },
    { label: 'GO', value: 'GO' },
    { label: 'MA', value: 'MA' },
    { label: 'MT', value: 'MT' },
    { label: 'MS', value: 'MS' },
    { label: 'MG', value: 'MG' },
    { label: 'PA', value: 'PA' },
    { label: 'PB', value: 'PB' },
    { label: 'PR', value: 'PR' },
    { label: 'PE', value: 'PE' },
    { label: 'PI', value: 'PI' },
    { label: 'RJ', value: 'RJ' },
    { label: 'RN', value: 'RN' },
    { label: 'RS', value: 'RS' },
    { label: 'RO', value: 'RO' },
    { label: 'RR', value: 'RR' },
    { label: 'SC', value: 'SC' },
    { label: 'SP', value: 'SP' },
    { label: 'SE', value: 'SE' },
    { label: 'TO', value: 'TO' },
    { label: 'DF', value: 'DF' }
  ]);
  function prosseguir() {
    //let restaurante = new RestauranteModel(nomeCompleto,
    //email, cnpj, telefone, fantasia,
    //valueRegiao)

    navigation.navigate('finalizarCadastroDescricao', /*restaurante*/)

  }

  return (
    <View style={styleGlobal.container}>
      <Image
        style={styleCadastro.icon}
        source={require('../../assets/icon.png')}
      />
      <Text style={[styleGlobal.txtIcon, { bottom: 10 }]}>FINALIZAR CADASTRO</Text>

      <View style={styleCadastro.ViwInput}>
        <Text style={styleCadastro.txt}>NOME COMPLETO:</Text>
        <TextInput style={styleCadastro.imput}
          value={nomeCompleto} onChangeText={TextInput => setNomeCompleto(TextInput)}
        />

        <Text style={styleCadastro.txt}>FANTASIA:</Text>
        <TextInput style={styleCadastro.imput}
          value={fantasia} onChangeText={TextInput => setFantasia(TextInput)}
        />

        <Text style={styleCadastro.txt}>E-MAIL:</Text>
        <TextInput style={styleCadastro.imput}
          value={email} onChangeText={TextInput => setEmail(TextInput)}
          editable={false}
        />

        <Text style={styleCadastro.txt}>CNPJ:</Text>
        <TextInputMask
          type={'cnpj'}
          style={styleCadastro.imput}
          value={cnpj}
          onChangeText={cnpj => { setCnpj(cnpj) }}
        />

        <Text style={styleCadastro.txt}>TELEFONE:</Text>
        <TextInputMask
          type={'cel-phone'}
          value={telefone}
          onChangeText={text => { setTelefone(text) }}
          style={styleCadastro.imput}
        />

        <Text style={styleCadastro.txt}>REGIÃO:</Text>
        <DropDownPicker
          open={openRegiao}
          value={valueRegiao}
          items={Regiao}
          setOpen={setOpenRegiao}
          setValue={setValueRegiao}
          setItems={setRegiao}

          style={styleCadastro.dropdown}
          labelStyle={styleCadastro.dropdown_label}
          containerStyle={styleCadastro.dropdown_Container}
          itemStyle={styleCadastro.dropdown_item}
          dropDownStyle={styleCadastro.dropdown_style}
          onChangeItem={item => setValueRegiao(item.value)}
          zIndex={1}
        />


        <View zIndex={-1}>
          <TouchableOpacity zIndex={-1}
            style={styleCadastro.Btn}
            onPress={() => prosseguir()}
          >
            <Text style={styleGlobal.button}>PROSSEGUIR</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

