import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native'

import { TextInputMask } from 'react-native-masked-text'
import DropDownPicker from 'react-native-dropdown-picker'

//STYLES
import styleGlobal from '../Styles/styleGlobal'
import styleEditPerfil from '../Styles/styleEditPerfil'
import styleCadastro from '../Styles/styleCadastro'

//MODEL
import restauranteModel from '../Model/restauranteModel'
//SERVICE
import restauranteService from '../Services/restauranteService'

export default function InicialScreen({ route, navigation }) {
  console.log('perfil', route);
  const [nome, setNome] = useState(route.params.restaurante_nome)
  const [fantasia, setFantasia] = useState(route.params.restaurante_fantasia)
  const [email, setEmail] = useState(route.params.restaurante_email)
  const [cnpj, setCnpj] = useState(route.params.restaurante_cnpj)
  const [telefone, setTelefone] = useState(route.params.restaurante_telefone)
  const [descricao, setDescricao] = useState(route.params.restaurante_descricao)
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
  function atualizar() {
    const restaurante = new restauranteModel(
      nome, email, cnpj,
      telefone, fantasia, valueRegiao,
      descricao, route.params.restaurante_codigo)
    restauranteService.update(restaurante)
    navigation.navigate('perfil', restaurante)

  }

  return (
    <View style={styleGlobal.container}>
      <Image
        style={[styleGlobal.icon2, styleEditPerfil.icon2]}
        source={require('../../assets/icon2.png')}
      />
      <Text style={[styleEditPerfil.txtIcon, styleGlobal.txtIcon]}>EDITAR PERFIL</Text>

      <View style={styleEditPerfil.ViwInput}>
        <Text style={styleEditPerfil.txt}>NOME COMPLETO:</Text>
        <TextInput style={styleEditPerfil.imput}
          value={nome}
          onChangeText={nome => { setNome(nome) }}
        />

        <Text style={styleEditPerfil.txt}>FANTASIA:</Text>
        <TextInput style={styleEditPerfil.imput}
          value={fantasia}
          onChangeText={fantasia => { setFantasia(fantasia) }}
        />

        <Text style={styleEditPerfil.txt}>E-MAIL:</Text>
        <TextInput style={styleEditPerfil.imput}
          editable={false}
          value={email}
          onChangeText={email => { setEmail(email) }}
        />

        <Text style={styleEditPerfil.txt}>CNPJ:</Text>
        <TextInputMask
          type={'cnpj'}
          style={styleEditPerfil.imput}
          value={cnpj}
          onChangeText={cnpj => { setCnpj(cnpj) }}
        />

        <Text style={styleEditPerfil.txt}>TELEFONE:</Text>

        <TextInputMask
          type={'cel-phone'}
          value={telefone}
          onChangeText={text => { setTelefone(text) }}
          style={styleEditPerfil.imput}
        />

        <Text style={styleEditPerfil.txt}>REGIÃO:</Text>
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

        <TouchableOpacity
          zIndex={-1}
          style={styleEditPerfil.Btn}
          onPress={() => atualizar()}
        >
          <Text style={styleGlobal.button}>ATUALIZAR</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}

