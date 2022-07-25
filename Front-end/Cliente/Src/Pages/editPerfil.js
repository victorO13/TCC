import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native'

//STYLES
import styleGlobal from '../Styles/styleGlobal'
import styleEditPerfil from '../Styles/styleEditPerfil'
//COMPONENTES
import { TextInputMask } from 'react-native-masked-text'
import DropDownPicker from 'react-native-dropdown-picker'
//MODEL
import clienteModel from '../Model/clienteModel'
//SERVICE
import clienteService from '../Services/clienteService'

export default function InicialScreen({ route, navigation }) {
  const [cliente, setCliente] = useState(route.params)
  const [cpf, setCpf] = useState(cliente.cliente_cpf)
  const [email, setEmail] = useState(cliente.cliente_email)
  const [nome, setNome] = useState(cliente.cliente_nome)
  const [sexo, setSexo] = useState(cliente.cliente_sexo)
  const [telefone, setTelefone] = useState(cliente.cliente_telefone)
  const [regiao, setRegiao] = useState(cliente.cliente_regiao)

  function atualizar() {
    const cliente = new clienteModel(
      nome, email, cpf,
      telefone, sexo,
      regiao, route.params.cliente_codigo)

    clienteService.update(cliente)
    navigation.navigate('perfil', cliente)

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
        <TextInput
          value={nome}
          onChangeText={nome => { setNome(nome) }}
          style={styleEditPerfil.imput}
        />

        <Text style={styleEditPerfil.txt}>E-MAIL:</Text>
        <TextInput
          value={email}
          onChangeText={email => { setEmail(email) }}
          style={styleEditPerfil.imput}
          editable={false}
        />

        <Text style={styleEditPerfil.txt}>CPF:</Text>
        <TextInputMask
          type={'cpf'}
          style={styleEditPerfil.imput}
          value={cpf}
          onChangeText={cpf => { setCpf(cpf) }}
        />


        <Text style={styleEditPerfil.txt}>TELEFONE:</Text>
        <TextInputMask
          type={'cel-phone'}
          value={telefone}
          onChangeText={tel => { setTelefone(tel) }}
          style={styleEditPerfil.imput}
        />

        <Text style={styleEditPerfil.txt}>SEXO:</Text>
        <DropDownPicker
          items={[
            { label: 'SELECIONE...', color: 'red', value: 'selecione', hidden: true },
            { label: 'MASCULINO', value: 'masculino' },
            { label: 'FEMENINO', value: 'femenino' },
            { label: 'OUTRO', value: 'outro' }
          ]}
          defaultValue={sexo}
          style={styleEditPerfil.dropdown}
          labelStyle={styleEditPerfil.dropdown_label}
          containerStyle={styleEditPerfil.dropdown_Container}
          itemStyle={styleEditPerfil.dropdown_item}
          dropDownStyle={styleEditPerfil.dropdown_style}
          onChangeItem={item => setSexo(item.value)}
          zIndex={3}
        />

        <Text style={styleEditPerfil.txt}>REGIÃO:</Text>
        <DropDownPicker
          items={[
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

          ]}
          defaultValue={regiao}
          style={styleEditPerfil.dropdown}
          labelStyle={styleEditPerfil.dropdown_label}
          containerStyle={styleEditPerfil.dropdown_Container}
          itemStyle={styleEditPerfil.dropdown_item}
          dropDownStyle={styleEditPerfil.dropdown_style}
          onChangeItem={item => setRegiao(item.value)}
          zIndex={2}
        />

        <TouchableOpacity
          zIndex={-1}
          style={styleEditPerfil.Btn}
          onPress={() => atualizar()}
        >
          <Text style={styleGlobal.button}>FINALIZAR</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}

