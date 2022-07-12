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
//COMPONENTS
import DropDownPicker from 'react-native-dropdown-picker'


export default function InicialScreen({ route, navigation }) {
  //const user = route.params.user
  const [nomeCompleto, setNomeCompleto] = useState('')
  const [email, setEmail] = useState('')
  const [cpf, setCpf] = useState('')
  const [telefone, setTelefone] = useState('')

  // DropDownPicker SEXO
  const [openSexo, setOpenSexo] = useState(false);
  const [valueSexo, setValueSexo] = useState('selecione');
  const [sexo, setSexo] = useState([
    { label: 'SELECIONE...', color: 'red', value: 'selecione', hidden: true },
    { label: 'MASCULINO', value: 'masculino' },
    { label: 'FEMENINO', value: 'femenino' },
    { label: 'OUTRO', value: 'outro' }
  ]);

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


  return (
    <View style={styleGlobal.container}>
      <Image
        style={styleCadastro.icon}
        source={require('../../assets/icon.png')}
      />
      <Text style={[styleCadastro.txtIcon, { bottom: 20 }]}>FINALIZAR CADASTRO</Text>

      <View style={styleCadastro.ViwInput}>
        <Text style={styleCadastro.txt}>NOME COMPLETO:</Text>
        <TextInput style={styleCadastro.imput}
          value={nomeCompleto} onChangeText={TextInput => setNomeCompleto(TextInput)}
        />

        <Text style={styleCadastro.txt}>E-MAIL:</Text>
        <TextInput style={styleCadastro.imput}
          value={email} editable={false}
        />

        <Text style={styleCadastro.txt}>CPF:</Text>
        <TextInputMask
          type={'cpf'}
          style={styleCadastro.imput}
          value={cpf}
          onChangeText={cpf => { setCpf(cpf) }}
        />

        <Text style={styleCadastro.txt}>TELEFONE:</Text>
        <TextInputMask
          type={'cel-phone'}
          value={telefone}
          onChangeText={tel => { setTelefone(tel) }}
          style={styleCadastro.imput}
        />
        <Text style={styleCadastro.txt}>SEXO:</Text>
        <DropDownPicker
          open={openSexo}
          value={valueSexo}
          items={sexo}
          setOpen={setOpenSexo}
          setValue={setValueSexo}
          setItems={setSexo}

          style={styleCadastro.dropdown}
          labelStyle={styleCadastro.dropdown_label}
          containerStyle={styleCadastro.dropdown_Container}
          itemStyle={styleCadastro.dropdown_item}
          dropDownStyle={styleCadastro.dropdown_style}
          onChangeItem={item => setValorSexo(item.value)}
          zIndex={2}
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
          onChangeItem={item => setValorSexo(item.value)}
          zIndex={1}
        />


      </View>


      <View zIndex={-1}>
        <TouchableOpacity
          style={styleCadastro.Btn}
          onPress={() => navigation.navigate('loginCliente')}
        >
          <Text style={styleGlobal.button}>FINALIZAR</Text>
        </TouchableOpacity>
      </View>


    </View>
  )
}

