import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Alert
} from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
import Textarea from 'react-native-textarea'

//STYLES
import styleGlobal from '../Styles/styleGlobal'
import styleCadastro from '../Styles/styleCadastro'

//COMPONENTS
import PageName from '../Components/PageName'

//MODEL
import pratoModel from '../Model/pratoModel'

//SERVICE
import pratoService from '../Services/pratoService'

export default function InicialScreen({ route, navigation }) {



  const [nome, setNome] = useState('')
  const [quant, setQuant] = useState('')
  const [preco, setPreco] = useState('')
  const [descricao, setDescricao] = useState('')
  const [codigo, setCodigo] = useState(!route.params.restaurante_codigo ? route.params.prato_restaurante_codigo : route.params.restaurante_codigo)
  const [email, setEmail] = useState(route.params.restaurante_email)
  // DropDownPicker REGIÂO
  const [openCategoria, setOpenCategoria] = useState(false);
  const [valueCategoria, setValueCategoria] = useState('selecione');
  const [categoria, setCategoria] = useState(
    [
      { label: 'SELECIONE...', color: 'red', value: 'selecione', hidden: true },
      { label: 'ENTRADA', value: 'entrada' },
      { label: 'PRINCIPAL', value: 'principal' },
      { label: 'SOBREMESA', value: 'sobremesa' },

    ]);

  function cadastrar() {
    let pratos = new pratoModel(nome, categoria, quant, preco,
      descricao, codigo, email)
    pratoService.create(pratos)
      .then((response) => {
        Alert.alert(
          "Sucesso!",
          "Prato adicionado com sucesso!",
          [
            { text: "OK", onPress: () => navigation.navigate('main') }
          ],
          { cancelable: false }
        )

      })
  }
  return (
    <View style={styleGlobal.container}>
      <PageName name='CADASTRAR PRATO' />

      <View style={styleCadastro.ViwInput}>
        <Text style={styleCadastro.txt}>NOME:</Text>
        <TextInput style={styleCadastro.imput} value={nome}
          onChangeText={TextInput => setNome(TextInput)}
        />

        <Text style={styleCadastro.txt}>CATEGORIA:</Text>
        <DropDownPicker
          open={openCategoria}
          value={valueCategoria}
          items={categoria}
          setOpen={setOpenCategoria}
          setValue={setValueCategoria}
          setItems={setCategoria}

          style={styleCadastro.dropdown}
          labelStyle={styleCadastro.dropdown_label}
          containerStyle={styleCadastro.dropdown_Container}
          itemStyle={styleCadastro.dropdown_item}
          dropDownStyle={styleCadastro.dropdown_style}
          onChangeItem={item => setValueCategoria(item.value)}
          zIndex={1}
        />
        <Text style={styleCadastro.txt}>SERVE ATÉ:</Text>
        <TextInput style={styleCadastro.imput} value={quant}
          onChangeText={TextInput => setQuant(TextInput)}
        />
        <Text style={styleCadastro.txt}>PREÇO:</Text>
        <TextInput style={styleCadastro.imput} value={preco}
          onChangeText={TextInput => setPreco(TextInput)}
        />
        <Text style={styleCadastro.txt}>DESCRIÇÃO:</Text>
        <Textarea
          containerStyle={styleCadastro.textareaContainer}
          style={styleCadastro.textarea} value={descricao}
          onChangeText={TextInput => setDescricao(TextInput)}

        />

        <View zIndex={1}>
          <TouchableOpacity
            zIndex={1}
            style={[styleCadastro.Btn, { marginBottom: 30 }]}
            onPress={() => cadastrar()}
          >
            <Text style={[styleGlobal.button]}>CADASTRAR</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

