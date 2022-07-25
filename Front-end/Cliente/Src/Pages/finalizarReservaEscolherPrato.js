import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  RefreshControl,
} from 'react-native'

//STYLES
import styleEscolherMesa from '../Styles/styleEscolherMesa'
import styleGlobal from '../Styles/styleGlobal'
import colors from '../Styles/Colors/Colors'

//COMPONENTES
import ItemListPrato from '../Components/ItemListPratos'
import PageName from '../Components/PageName'

//SERVICES
import pratoService from '../Services/pratoService'

export default function EscolherPrato({ route, navigation }) {

  const [qtdPessoa, setQtdPessoa] = useState(0)

  const params = route.params
  const cliente = params.cliente
  const mesa = params.item
  const restaurante = params.restaurante


  const [listaPratos, setListaPratos] = useState([])
  const [listaPratoEscolhido, setListaPratoEscolhido] = useState([])

  const [listaPratoUpdate, setListaPratoUpdate] = useState(true)
  const [filtro, setFiltro] = useState('selecione')


  async function loadDados() {
    if (listaPratoUpdate) {

      await pratoService.findByRestaurante(mesa.mesa_restaurante_codigo)
        .then((r) => {
          setListaPratos(r.pratos)
        })
        .catch((error) => { })
        .then(() => { setListaPratoUpdate(false) })
    }
  }

  useEffect(() => {
    loadDados()
  }, [listaPratoUpdate])

  function addPrato(prato) {
    setListaPratoEscolhido([prato, ...listaPratoEscolhido])
    //console.log('ADD', listaPratoEscolhido)
  }
  function removePrato(prato) {
    setListaPratoEscolhido(listaPratoEscolhido.filter(pratos => pratos !== prato))
    //console.log('REMOVE', listaPratoEscolhido) 
  }


  return (
    <View style={styleEscolherMesa.container}>

      <PageName name='ESCOLHER PRATO' />

      <FlatList
        style={[styleGlobal.list, { marginBottom: 15 }]}
        data={listaPratos}
        keyExtractor={item => { return item.prato_codigo + '' }}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={listaPratoUpdate}
            onRefresh={() => { setListaPratoUpdate(true) }}
            progressBackgroundColor={colors.primary}
          />
        }
        renderItem={({ item }) =>
          <ItemListPrato
            nome={item.prato_nome}
            descricao={item.prato_descricao}
            categoria={item.prato_categoria}
            preco={item.prato_preco}
            quantidade={item.prato_quantidade}
            star={4}
            key={item.prato_codigo}
            funcAddThis={() => { addPrato(item) }}
            funcRemoveThis={() => { removePrato(item) }}

          />
        }
      />
      <TouchableOpacity
        style={styleGlobal.button}
        onPress={() => { navigation.navigate('detalhesReserva', { cliente, restaurante, mesa, pratos: listaPratoEscolhido }) }}
      >
        <Text style={styleGlobal.button}>Prosseguir</Text>
      </TouchableOpacity>
    </View>
  )
}

